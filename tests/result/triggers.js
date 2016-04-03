var
  _ = require('underscore'),
  utils = require('./../../lib/utils'),
  triggers = require('./../../result/triggers.json');

require('chai').should();

describe('result', function () {
  describe('triggers', function () {
    _.each(triggers, function (props, key) {
      if (key === 'auth') {
        it('Check auth trigger', function () {
          props.should.deep.equal({
            "_dump_version": 1,
            "label": "Auth",
            "help_text": "Trigger for test auth",
            "noun": "auth",
            "important": false,
            "hide": true,
            "data_source": "Polling",
            "url": "https://{{account}}.amocrm.com/private/api/auth.php?type=json",
            "custom_fields_url": null,
            "hook_event": null,
            "hook_static_directions": "Log into your service and paste the below URL into the webhook setup field.",
            "sample_result_fields": [
              {
                "type": "unicode",
                "key": "response__accounts"
              },
              {
                "type": "unicode",
                "key": "response__accounts[]id",
                "label": "account_id"
              },
              {
                "type": "unicode",
                "key": "response__accounts[]language",
                "label": "account_lang"
              },
              {
                "type": "unicode",
                "key": "response__accounts[]name",
                "label": "account_name"
              },
              {
                "type": "unicode",
                "key": "response__accounts[]subdomain",
                "label": "account_subdomain"
              },
              {
                "type": "unicode",
                "key": "response__accounts[]timezone",
                "label": "account_timezone"
              },
              {
                "type": "bool",
                "key": "response__auth",
                "label": "auth_success"
              },
              {
                "type": "int",
                "key": "response__server_time"
              }
            ],
            "fields": {}
          });
        });
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
          var actions = ['add', 'delete', 'update', 'restore'];

          if (entity === 'lead') {
            actions.push('status', 'responsible');
          }

          actions.indexOf(action).should.not.equal(-1);
        });


        var template_keys = [
          '_dump_version',
          'label',
          'help_text',
          'noun',
          'important',
          'hide',
          'data_source',
          'url',
          'custom_fields_url',
          'hook_event',
          'hook_static_directions',
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
              label_must_be = 'New %s';
              break;
            case 'delete':
              label_must_be = '%s Deleted';
              break;
            case 'update':
              label_must_be = '%s Updated';
              break;
            case 'restore':
              label_must_be = '%s Restored';
              break;
            case 'status':
              label_must_be = '%s Status Changed';
              break;
            case 'responsible':
              label_must_be = '%s Responsible User Changed';
              break;
          }
          label_must_be = utils.string.capitalize(label_must_be.replace('%s', entity));

          props.label.should.equal(label_must_be);
        });

        it('Help text must be valid', function () {
          var help_text_must_be = '';

          switch (action) {
            case 'add':
              help_text_must_be = 'Triggers when a new %s is created';
              break;
            case 'delete':
              help_text_must_be = 'Triggers when %s is deleted';
              break;
            case 'update':
              help_text_must_be = 'Triggers when %s is updated';
              break;
            case 'restore':
              help_text_must_be = 'Triggers when %s is restored';
              break;
            case 'status':
              help_text_must_be = 'Triggers when %s status is changed';
              break;
            case 'responsible':
              help_text_must_be = 'Triggers when %s responsible user is changed';
              break;
          }
          help_text_must_be = help_text_must_be.replace('%s', entity);

          props.help_text.should.equal(help_text_must_be);
        });

        it('Noun must be valid', function () {
          props.noun.should.equal(utils.string.capitalize(entity));
        });

        it('Url must be valid', function () {
          var valid_url = 'https://webhooks.amocrm.com/samples/{{account}}/%s/%s/';

          switch (entity) {
            case 'contact':
            case 'lead':
              valid_url = valid_url.replace('%s', entity + 's');
              break;
            case 'company':
              valid_url = valid_url.replace('%s', 'companies');
              break;
          }
          props.url.should.equal(valid_url.replace('%s', action));
        });

        it('Custom fields url must be valid', function () {
          props.custom_fields_url.should.equal('https://{{account}}.amocrm.com/private/api/v2/json/accounts/current/');
        });

        it('Important check', function () {
          props.important.should.to.be.a('boolean');
          props.important.should.to.equal(_.indexOf(['add_lead', 'update_lead', 'status_lead'], key) !== -1);
        });

        it('Hide check', function () {
          props.hide.should.to.be.a('boolean');
          props.hide.should.to.equal(action === 'delete');
        });

        it('Check fields', function () {
          props.fields.should.deep.equal({});
        });

        if (action === 'delete') {
          it('Check sample result fields', function () {
            props.sample_result_fields.should.be.a('array');

            var
              fields_should = {
                id: {
                  type: 'unicode',
                  key: 'id',
                  label: '%s ID'
                },
                subdomain: {
                  type: 'unicode',
                  key: 'subdomain',
                  label: 'Account subdomain'
                },
                url: {
                  type: 'unicode',
                  key: 'url',
                  label: 'URL for see %s'
                }
              };

            props.sample_result_fields.length.should.equal(_.keys(fields_should).length);
            props.sample_result_fields.forEach(function (field) {
              ['type', 'key', 'label'].forEach(function (property) {
                field.should.have.property(property);
              });
              fields_should.should.have.property(field.key);

              var test_field = fields_should[field.key];

              ['type', 'key', 'label'].forEach(function (property) {
                var should_be;
                if (field.key === 'id') {
                  should_be = test_field[property].replace('%s', utils.string.capitalize(entity));
                } else {
                  should_be = test_field[property].replace('%s', entity);
                }
                field[property].should.equal(should_be);
              });
            });
          });
        } else {
          it('Check sample result fields', function () {
            props.sample_result_fields.should.be.a('array');
            props.sample_result_fields.length.should.equal(0);
          });
        }

        it('Just check "data_source" key', function () {
          props.data_source.should.equal('Notification REST Hooks');
        });

        it('Just check "hook_event" key', function () {
          props.hook_event.should.equal(key);
        });

        it('Just check "hook_static_directions" key', function () {
          props.hook_static_directions.should.equal('Log into your service and paste the below URL into the webhook setup field.');
        });
      });
    });
  });
});
