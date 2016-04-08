var
  _ = require('underscore'),
  utils = require('./../../lib/utils'),
  Zap = require('./app/app'),
  config = require('./../../config'),
  new_tests_dir = __dirname + '/app/sources',
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

  describe('Check every bundle', function () {
    var checked_array = [];
    _.each(['company', 'contact', 'lead', 'note', 'task'], function (entity) {
      _.each(['action', 'hook'], function (type) {
        describe([utils.string.capitalize(type + 's'), 'for entity', entity].join(' '), function () {
          var
            test_dir = [new_tests_dir, entity, type].join('/'),
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
                test_data.bundle.response.content = fs.readFileSync([new_tests_dir, 'accounts_current.json'].join('/'), 'utf8');
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
