var
  _ = require('underscore'),
  utils = require('./../utils'),
  JsonBase = require('./json_base'),
  Searches;

Searches = JsonBase.extend({
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

    result.hide = action === 'delete';
    result.hook_event = this.generateKey(entity, action);
    result.url = result.url.replace('%s', this._config.entities[entity].many).replace('%s', action);

    return result;
  }
});

module.exports = Searches;

