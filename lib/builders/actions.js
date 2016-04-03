var
  _ = require('underscore'),
  utils = require('./../utils'),
  JsonBase = require('./json_base'),
  Actions;

Actions = JsonBase.extend({
  _config: null,

  _template: {
    _dump_version: 1,
    label: '%s %s',
    help_text: '%s a %s',
    noun: '%s',
    important: false,
    hide: false,
    url: 'https://{{account}}.amocrm.com/private/api/v2/json/%s/set/',
    custom_fields_url: 'https://{{account}}.amocrm.com/private/api/v2/json/accounts/current/',
    sample_result_fields: [
      {
        type: 'int',
        key: 'id',
        label: 'Unique %s identifier'
      },
      {
        type: 'unicode',
        key: 'subdomain',
        label: 'Account subdomain'
      },
      {
        type: 'unicode',
        key: 'url',
        label: 'Url to see %s'
      }
    ],
    fields: {}
  }
});

module.exports = Actions;

