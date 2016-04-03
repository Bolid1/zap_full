var
  _ = require('underscore'),
  utils = require('./../utils'),
  Actions;

Actions = function (config) {
  this._config = config;
};

_.extend(Actions.prototype, {
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
  },

  render: function (entity, action) {
    var
      key = [entity, action].join('_'),
      entity_camel = utils.string.capitalize(entity),
      result = utils.objects.clone(this._template),
      is_note_or_task = _.indexOf(['note', 'task'], entity) !== -1,
      config = this._config;

    if (is_note_or_task) {
      result.sample_result_fields = _.reject(result.sample_result_fields, function (field) {
        return field.key === 'url';
      });
    }

    result.important = _.indexOf(config.important, key) !== -1;
    result.sample_result_fields.forEach(function (field, key, fields) {
      field.label = field.label.replace('%s', entity);
      fields[key] = field;
    });

    result.noun = entity_camel;
    ['label', 'help_text'].forEach(function (key) {
      result[key] = config.actions[action].names[key].replace('%s', entity);
    });

    result.label = utils.string.capitalize(result.label);

    result.url = result.url.replace('%s', this._config.entities[entity].url);

    return result;
  },

  make: function () {
    var
      self = this,
      result = {};

    _.keys(self._config.entities).forEach(function (entity) {
      _.keys(self._config.actions).forEach(function (action) {
        var key = [entity, action].join('_');

        result[key] = self.render(entity, action);
      });
    });

    return result;
  }
});

module.exports = Actions;

