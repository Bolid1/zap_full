var
  _ = require('underscore'),
  utils = require('./../utils'),
  JsonBase;

JsonBase = function (config) {
  this._config = config;
};

_.extend(JsonBase.prototype, {
  _config: null,
  _template: null,

  render: function (entity, action) {
    var
      key = this.generateKey(entity, action),
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

    if (_.isFunction(this.postRender)) {
      result = _.extend(result, this.postRender(entity, action, result));
    }

    return result;
  },

  generateKey: function (entity, action) {
    return [entity, action].join('_');
  },

  make: function () {
    var
      self = this,
      result = {};

    _.keys(self._config.entities).forEach(function (entity) {
      _.keys(self._config.actions).forEach(function (action) {
        if (self._config.actions[action].only) {
          if (_.indexOf(self._config.actions[action].only, entity) === -1) {
            return;
          }
        }

        result[self.generateKey(entity, action)] = self.render(entity, action);
      });
    });

    return result;
  }
});

JsonBase.extend = utils.functions.extend;

module.exports = JsonBase;
