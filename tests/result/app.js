var
  _ = require('underscore'),
  utils = require('./../../lib/utils'),
  Zap = require('./app/app'),
  config = require('./../../config'),
  tests_sources_dir = __dirname + '/app/sources',
  fs = require('fs'),
  removeDateFields;

removeDateFields = function (obj) {
  if (_.isObject(obj)) {
    obj = utils.objects.filter(obj, function (value, key) {
      if (key.toString().indexOf('Date of creation ') > -1) {
        return false;
      }

      if (key.toString().indexOf('Date when') > -1) {
        return false;
      }

      return ['date_create', 'last_modified'].indexOf(key) === -1;
    });
  }

  if (_.isObject(obj) || _.isArray(obj)) {
    obj = _.each(obj, function (value, key, list) {
      list[key] = removeDateFields(value);
    });
  }

  return obj;
};

require('chai').should();

describe('result/app', function () {
  describe('All keys must exist', function () {
    var props = [
      'pre_subscribe',
      'pre_unsubscribe'
    ];
    ['actions', 'searches', 'triggers'].forEach(function (type) {
      _.keys(config[type].entities).forEach(function (entity) {
        _.keys(config[type].actions).forEach(function (action) {
          if (config[type].actions[action].only) {
            if (_.indexOf(config[type].actions[action].only, entity) === -1) {
              return;
            }
          }

          var prefix, postfixes = [];

          switch (type) {
            case 'actions':
              prefix = [entity, action].join('_');
              postfixes.push('post_custom_action_fields', 'pre_write', 'post_write');
              break;
            case 'searches':
              prefix = [entity, action].join('_');
              postfixes.push('post_custom_search_fields', 'pre_search', 'post_search', 'post_read_resource');
              if (['note', 'task'].indexOf(entity) !== -1) {
                postfixes.push('pre_read_resource');
              }
              break;
            case 'triggers':
              prefix = [action, entity].join('_');
              postfixes.push('catch_hook', 'pre_poll', 'post_poll');
              if (action !== 'delete') {
                postfixes.push('post_custom_trigger_fields');
              }
              break;
          }

          postfixes.forEach(function (postfix) {
            props.push([prefix, postfix].join('_'));
          });
        });
      });
    });

    props.forEach(function (prop) {
      it('Property "' + prop + '" must exist and be a function', function () {
        Zap.should.has.property(prop);
        Zap[prop].should.be.a('function');
      });
    });
  });

  describe('All pre handlers must exist', function () {
    var props = [
      'pre_subscribe',
      'pre_unsubscribe'
    ];
    ['actions', 'searches', 'triggers'].forEach(function (type) {
      _.keys(JSON.parse(fs.readFileSync([config.paths.result, type + '.json'].join('/'), 'utf8'))).forEach(function (prefix) {
        var postfixes = [];
        switch (type) {
          case 'actions':
            postfixes.push('pre_custom_action_fields', 'pre_write');
            break;
          case 'searches':
            postfixes.push('pre_custom_search_fields', 'pre_search', 'pre_read_resource');
            break;
          case 'triggers':
            postfixes.push('pre_poll');
            if (prefix !== 'auth') {
              postfixes.push('pre_custom_trigger_fields');
            }
            break;
        }

        postfixes.forEach(function (postfix) {
          props.push([prefix, postfix].join('_'));
        });
      });
    });

    props.forEach(function (prop) {
      it('Property "' + prop + '" must exist and be a function', function () {
        Zap.should.has.property(prop);
        Zap[prop].should.be.a('function');
      });
      it('Property "' + prop + '" must return valid url', function () {
        var
          test_data_template = {
            auth_fields: {
              top_level_domain: 'ru',
              login: 'v.vargin@team.amocrm.com',
              api_key: '9292ec5cdb8d5d48bb307cd83c6a0d02',
              account: 'testzapier'
            },
            request: {
              files: {},
              url: 'https://testzapier.amocrm.com/private/api/v2/json/contacts/set/',
              auth: null,
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json'
              },
              params: {
                USER_LOGIN: 'v.vargin@team.amocrm.com',
                USER_HASH: '9292ec5cdb8d5d48bb307cd83c6a0d02'
              },
              allow_redirects: false,
              data: '{\'request\':{\'contacts\':{\'add\':[{\'company_name\':\'Some company name\',\'responsible_user_id\':261002,\'custom_fields\':[{\'id\':\'1520849\',\'values\':[{\'value\':\'U02S377ES\'}]},{\'id\':\'1520851\',\'values\':[{\'value\':\'23528602727\',\'enum\':\'3636269\',\'subtype\':\'3636269\'},{\'value\':\'29845793846\',\'enum\':\'3636269\',\'subtype\':\'3636269\'},{\'value\':\'5657568\',\'enum\':\'3636271\',\'subtype\':\'3636271\'},{\'value\':\'i89567\',\'enum\':\'3636271\',\'subtype\':\'3636271\'},{\'value\':\'phone home\',\'enum\':\'3636277\',\'subtype\':\'3636277\'}]},{\'id\':\'1520853\',\'values\':[{\'value\':\'Some mail\',\'enum\':\'3636285\',\'subtype\':\'3636285\'}]}],\'name\':\'gfg\'}]}}}',
              method: 'POST'
            },
            action_fields: {},
            action_fields_full: {},
            meta: {},
            action_fields_raw: {},
            response: {},
            zap: {}
          },
          test_result;

        ['ru', 'com', undefined].forEach(function (top_level_domain) {
          var test_data = utils.objects.clone(test_data_template);
          test_data.auth_fields.top_level_domain = top_level_domain;
          test_result = Zap[prop](test_data);
          test_result.should.has.property('url');
          top_level_domain = top_level_domain ? top_level_domain : 'com';
          test_result.url.should.contain('.' + top_level_domain + '/');
          (test_result.url.match(new RegExp(top_level_domain, 'g')) || []).length.should.be.equal(1);
        });
      });
    });
  });

  describe('Check every bundle', function () {
    var checked_array = [];
    _.each(['company', 'contact', 'lead', 'note', 'task'], function (entity) {
      _.each(['action', 'hook'], function (type) {
        describe([utils.string.capitalize(type + 's'), 'for entity', entity].join(' '), function () {
          var
            test_dir = [tests_sources_dir, entity, type].join('/'),
            test_dir_exist = false;

          if (type === 'hook') {
            if (!config.triggers.entities[entity]) {
              return;
            }
          }

          test_dir_exist = fs.existsSync(test_dir);
          it('Directory must exist', function () {
            test_dir_exist.should.equal(true);
          });
          if (!test_dir_exist) {
            return;
          }

          _.each(fs.readdirSync(test_dir), function (file_name) {
            var
              test_data = JSON.parse(fs.readFileSync([test_dir, file_name].join('/'), 'utf8')),
              action_name = [],
              test_result,
              action = file_name.replace('.json', '').split('_'),
              is_search = action[0] === 'search',
              is_custom = action[1] && action[1] === 'custom';

            describe('#' + action.join('_'), function () {
              switch (true) {
                case type === 'hook':
                  action_name = [action.join('_'), entity, 'catch_hook'];
                  break;
                case type === 'action':
                  action_name = [entity];
                  if (is_custom) {
                    action_name.push(action[0]);
                    action_name.push('post_custom');
                    action_name.push(is_search ? 'search' : 'action');
                    action_name.push('fields');
                  } else {
                    action_name.push(action.join('_'));
                    if (!action[2]) {
                      action_name.push(is_search ? 'search' : 'write');
                    }
                  }
                  break;
              }

              action_name = action_name.join('_');
              it('action name must not be empty', function () {
                action_name.length.should.not.equal(0);
              });

              if (!action_name) {
                return;
              }

              it('Zap must have property ' + action_name, function () {
                Zap.should.has.property(action_name);
              });

              if (is_custom) {
                test_data.bundle.response.content = fs.readFileSync([tests_sources_dir, 'accounts_current.json'].join('/'), 'utf8');
              }


              test_result = Zap[action_name](test_data.bundle);

              if (typeof test_data.result.data === 'object' && typeof test_result.data === 'string') {
                test_data.result.data = JSON.stringify(test_data.result.data);
              }

              var tmp_1, tmp_2;
              if (_.isString(test_data.result.data)) {
                try {
                  tmp_1 = JSON.parse(test_data.result.data);
                  tmp_2 = JSON.parse(test_result.data);

                  test_data.result.data = tmp_1;
                  test_result.data = tmp_2;
                } catch (e) {
                }
              }

              test_data.result = removeDateFields(test_data.result);
              test_result = removeDateFields(test_result);

              it('Results must be equals', function () {
                test_result.should.deep.equal(test_data.result);
              });

              checked_array.push(action_name);
            });
          });
        });
      });
    });

    // @TODO: Uncomment when need
    //var diff = _.difference(_.keys(Zap), checked_array);
    //it('All props must be checked!', function () {
    //  diff.should.deep.equal([]);
    //});
  });
});
