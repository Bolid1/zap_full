var
  _ = require('underscore'),
  utils = require('./../../lib/utils'),
  actions = require('./../../result/actions.json'),
  should = require('chai').should(),
  template;

template = {
  _dump_version: 1,
  label: "Create Lead",
  help_text: "Creates a new lead",
  noun: "Lead",
  important: true,
  hide: false,
  url: "https://{{account}}.amocrm.com/private/api/v2/json/leads/set/",
  custom_fields_url: "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
  sample_result_fields: [
    {
      type: "int",
      key: "id",
      label: "Unique lead identifier"
    },
    {
      type: "unicode",
      key: "subdomain",
      label: "Account subdomain"
    },
    {
      type: "unicode",
      key: "url",
      label: "Url to see lead"
    }
  ],
  fields: {}
};

describe('result', function () {
  describe('actions', function () {
    _.each(actions, function (props, key) {
      key = key.split('_');
      var
        entity = key[0],
        action = key[1];

      key = key.join('_');

      describe('action#' + key, function () {
        it('entity "' + entity + '" must be in array', function () {
          ['contact', 'lead', 'company', 'task', 'note'].indexOf(entity).should.not.equal(-1);
        });

        it('action "' + action + '" must be in array', function () {
          ['add', 'update'].indexOf(action).should.not.equal(-1);
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
          var label_must_be = '';

          switch (action) {
            case 'add':
              label_must_be = 'Create ';
              break;
            case 'update':
              label_must_be = 'Update ';
              break;
          }
          label_must_be += utils.string.capitalize(entity);

          props.label.should.equal(label_must_be);
        });

        it('Help text must be valid', function () {
          var label_must_be = '';

          switch (action) {
            case 'add':
              label_must_be = 'Creates a new ';
              break;
            case 'update':
              label_must_be = 'Updates a ';
              break;
          }
          label_must_be += entity;

          props.help_text.should.equal(label_must_be);
        });

        it('Noun must be valid', function () {
          props.noun.should.equal(utils.string.capitalize(entity));
        });

        it('Url must be valid', function () {
          var valid_url = 'https://{{account}}.amocrm.com/private/api/v2/json/%s/set/';

          switch (entity) {
            case 'contact':
            case 'lead':
            case 'task':
            case 'note':
              valid_url = valid_url.replace('%s', entity + 's');
              break;
            case 'company':
              valid_url = valid_url.replace('%s', entity);
              break;
          }
          props.url.should.equal(valid_url);
        });

        it('Custom fields url must be valid', function () {
          props.custom_fields_url.should.equal('https://{{account}}.amocrm.com/private/api/v2/json/accounts/current');
        });

        // @TODO:
        template_keys = [
          'important',
          'hide',
          'sample_result_fields',
          'fields'
        ];
      });
    });
  });
});
