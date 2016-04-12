var
  _ = require('underscore'),
  utils = require('./../utils'),
  JsonBase = require('./json_base'),
  Triggers;

Triggers = JsonBase.extend({
  _config: null,

  _template: {
    _dump_version: 1,
    label: 'New Lead',
    help_text: 'Triggers when a new lead is created',
    noun: 'Lead',
    important: true,
    hide: false,
    data_source: 'Notification REST Hooks',
    url: 'https://webhooks.amocrm.com/samples/{{account}}/%s/%s/',
    custom_fields_url: 'https://{{account}}.amocrm.com/private/api/v2/json/accounts/current/',
    hook_event: '%s_%s',
    hook_static_directions: 'Log into your service and paste the below URL into the webhook setup field.',
    sample_result_fields: [
      {
        type: 'unicode',
        key: 'id',
        label: '%s ID'
      },
      {
        type: 'unicode',
        key: 'subdomain',
        label: 'Account subdomain'
      },
      {
        type: 'unicode',
        key: 'url',
        label: 'URL for see %s'
      }
    ],
    fields: {}
  },

  generateKey: function (entity, action) {
    return [action, entity].join('_');
  },

  initResult: function () {
    return _.extend(JsonBase.prototype.initResult.apply(this, arguments), {
      auth: {
        _dump_version: 1,
        label: 'Auth',
        help_text: 'Trigger for test auth',
        noun: 'auth',
        important: false,
        hide: true,
        data_source: 'Polling',
        url: 'https://{{account}}.amocrm.com/private/api/auth.php?type=json',
        custom_fields_url: null,
        hook_event: null,
        hook_static_directions: 'Log into your service and paste the below URL into the webhook setup field.',
        sample_result_fields: [
          {
            type: 'unicode',
            key: 'response__accounts'
          },
          {
            type: 'unicode',
            key: 'response__accounts[]id',
            label: 'account_id'
          },
          {
            type: 'unicode',
            key: 'response__accounts[]language',
            label: 'account_lang'
          },
          {
            type: 'unicode',
            key: 'response__accounts[]name',
            label: 'account_name'
          },
          {
            type: 'unicode',
            key: 'response__accounts[]subdomain',
            label: 'account_subdomain'
          },
          {
            type: 'unicode',
            key: 'response__accounts[]timezone',
            label: 'account_timezone'
          },
          {
            type: 'bool',
            key: 'response__auth',
            label: 'auth_success'
          },
          {
            type: 'int',
            key: 'response__server_time'
          }
        ],
        fields: {}
      }
    });
  },

  postRender: function (entity, action, result) {
    if (action === 'delete') {
      result.sample_result_fields = _.map(result.sample_result_fields, function (field) {
        field.label = field.label.replace('%s', entity);

        if (field.key == 'id') {
          field.label = utils.string.capitalize(field.label);
        }

        return field;
      });
    } else {
      result.sample_result_fields = [];
    }

    result.hide = ['delete', 'restore'].indexOf(action) !== -1;
    result.hook_event = this.generateKey(entity, action);
    result.url = result.url.replace('%s', this._config.entities[entity].many).replace('%s', action);

    return result;
  }
});

module.exports = Triggers;

