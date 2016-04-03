var
  _ = require('underscore'),
  utils = require('./../../lib/utils'),
  triggers = require('./../../result/triggers.json');

require('chai').should();

describe('result', function () {
  describe('triggers', function () {
    _.each(triggers, function (props, key) {
      if (key === 'auth') {
        // @FIXME: check this trigger
        return;
      }

      key = key.split('_');
      var
        entity = key[1],
        action = key[0];

      key = key.join('_');

      describe('action#' + key, function () {
        it('entity "' + entity + '" must be in array', function () {
          ['contact', 'lead', 'company'].indexOf(entity).should.not.equal(-1);
        });

        it('action "' + action + '" must be in array', function () {

        });


        var template_keys = [
          '_dump_version',
          'label',
          'help_text',
          'noun',
          'important',
          'hide',
          'url',
          'custom_fields_url',
          'resource_url',
          'action_pair_label',
          'action_pair_key',
          'sample_result_fields',
          'fields'
        ];

        template_keys.forEach(function (template_key) {
          it('Template key "' + template_key + '" must exist', function () {
            props.should.have.property(template_key);
          });
        });

        it('Dump version must be equal 1', function () {
          props._dump_version.should.equal(1);
        });

        template_keys = [
          'label',
          'help_text',
          'noun',
          'url',
          'custom_fields_url'
        ];

        template_keys.forEach(function (template_key) {
          it('Template key "' + template_key + '" must be string', function () {
            props[template_key].should.be.a('string');
          });
        });

        it('Label must be valid', function () {
          props.label.should.equal('Find ' + utils.string.capitalize(entity));
        });

        it('Help text must be valid', function () {
          props.help_text.should.equal('Finds an existing ' + entity);
        });

        it('Noun must be valid', function () {
          props.noun.should.equal(utils.string.capitalize(entity));
        });

        it('Url must be valid', function () {
          var valid_url = 'https://{{account}}.amocrm.com/private/api/v2/json/%s/list/';

          switch (entity) {
            case 'contact':
            case 'lead':
              valid_url = valid_url.replace('%s', entity + 's');
              break;
            case 'company':
              valid_url = valid_url.replace('%s', entity);
              break;
          }
          props.url.should.equal(valid_url);
        });

        it('Custom fields url must be valid', function () {
          props.custom_fields_url.should.equal('https://{{account}}.amocrm.com/private/api/v2/json/accounts/current/');
        });

        it('Important check', function () {
          props.important.should.to.be.a('boolean');
          props.important.should.to.equal(_.indexOf(['lead', 'contact', 'company'], entity) !== -1);
        });

        it('Hide check', function () {
          props.hide.should.to.be.a('boolean');
          props.hide.should.to.equal(false);
        });

        it('Check fields', function () {
          props.fields.should.deep.equal({});
        });

        it('Check sample result fields', function () {
          props.sample_result_fields.should.be.a('array');
          props.sample_result_fields.length.should.equal(0);
        });


        it('Resource url must like url', function () {
          props.resource_url.should.equal(props.url + '?id={{id}}');
        });

        it('Action label must be like this', function () {
          props.action_pair_label.should.equal('Find or Create ' + utils.string.capitalize(entity));
        });

        it('Action key must be like this', function () {
          props.action_pair_key.should.equal(entity + '_add');
        });
      });
    });
  });
});
