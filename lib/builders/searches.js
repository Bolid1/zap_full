var
  _ = require('underscore'),
  utils = require('./../utils'),
  JsonBase = require('./json_base'),
  Searches;

Searches = JsonBase.extend({
  _config: null,

  _template: {
    _dump_version: 1,
    label: '%s %s',
    help_text: '%s %s',
    noun: 'Lead',
    important: true,
    hide: false,
    url: 'https://{{account}}.amocrm.com/private/api/v2/json/%s/list/',
    custom_fields_url: 'https://{{account}}.amocrm.com/private/api/v2/json/accounts/current/',
    resource_url: 'https://{{account}}.amocrm.com/private/api/v2/json/%s/list/?id={{id}}',
    action_pair_label: '%s %s',
    action_pair_key: '%s_add',
    sample_result_fields: [],
    fields: {
      id: {
        label: 'ID',
        required: false,
        help_text: 'Select an element with the specified ID (if this parameter is indicated, all other parameters will be ignored)',
        default: null,
        choices: null,
        sort: null,
        type_of: 'Integer',
        list: true,
        prefill: null
      },
      query: {
        label: 'Query',
        required: false,
        help_text: 'Searched element, by a text query (Performs search in such fields as e-mail, phone and others; does not perform search in notes and tasks)',
        default: null,
        choices: null,
        sort: null,
        type_of: 'Unicode',
        list: false,
        prefill: null
      },
      element_id: {
        label: 'Element ID',
        required: false,
        help_text: 'Additional search filter option by lead/contact ID',
        default: null,
        choices: null,
        sort: null,
        type_of: 'Integer',
        list: false,
        prefill: null
      },
      type: {
        label: 'Element Type',
        required: true,
        help_text: 'Obtaining data only for contact or lead',
        default: null,
        choices: 'contact|Contact,lead|Lead',
        sort: null,
        type_of: 'Unicode',
        list: false,
        prefill: null
      }
    }
  },

  postRender: function (entity, action, result) {
    var
      is_note_or_task = _.indexOf(['note', 'task'], entity) !== -1,
      entity_camel = utils.string.capitalize(entity);

    var
      fields_set;
    if (is_note_or_task) {
      fields_set = ['id', 'element_id', 'type'];
    } else {
      fields_set = ['id', 'query'];
    }
    result.fields = utils.objects.filter(result.fields, function (field, index, fields) {
      fields[index].help_text = field.help_text.replace('%s', entity_camel);

      return _.indexOf(fields_set, index) !== -1;
    });

    if (!_.isEmpty(result.fields.type)) {
      result.fields.type.required = entity === 'note';
    }

    result.resource_url = result.resource_url.replace('%s', this._config.entities[entity].url);
    result.action_pair_label = this._config.actions[action].names.pair_label.replace('%s', entity_camel);
    result.action_pair_key = result.action_pair_key.replace('%s', entity);

    result.url = result.url.replace('%s', this._config.entities[entity].url);

    return result;
  }
});

module.exports = Searches;

