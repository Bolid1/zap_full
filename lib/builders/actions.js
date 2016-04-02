var
  _ = require('underscore'),
  Actions;

Actions = function () {

};

_.extend(Actions.prototype, {
  make: function () {
    console.log('Make it!');

    return {
      "lead_add": {
        "_dump_version": 1,
        "label": "Create Lead",
        "help_text": "Creates a new lead",
        "noun": "Lead",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/leads/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [
          {
            "type": "int",
            "key": "id",
            "label": "Unique lead identifier"
          },
          {
            "type": "unicode",
            "key": "subdomain",
            "label": "Account subdomain"
          },
          {
            "type": "unicode",
            "key": "url",
            "label": "Url to see lead"
          }
        ],
        "fields": {}
      },
      "lead_update": {
        "_dump_version": 1,
        "label": "Update Lead",
        "help_text": "Updates a lead",
        "noun": "Lead",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/leads/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "contact_add": {
        "_dump_version": 1,
        "label": "Create Contact",
        "help_text": "Creates a new contact",
        "noun": "Contact",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/contacts/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "contact_update": {
        "_dump_version": 1,
        "label": "Update Contact",
        "help_text": "Updates a contact",
        "noun": "Contact",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/contacts/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "company_add": {
        "_dump_version": 1,
        "label": "Create Company",
        "help_text": "Creates a new company",
        "noun": "Company",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/company/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "company_update": {
        "_dump_version": 1,
        "label": "Update Company",
        "help_text": "Updates a company",
        "noun": "Company",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/company/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "task_add": {
        "_dump_version": 1,
        "label": "Create Task",
        "help_text": "Creates a new task",
        "noun": "Task",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/tasks/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "task_update": {
        "_dump_version": 1,
        "label": "Update Task",
        "help_text": "Updates a task",
        "noun": "Task",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/tasks/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "note_add": {
        "_dump_version": 1,
        "label": "Create Note",
        "help_text": "Creates a new note",
        "noun": "Note",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/notes/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      },
      "note_update": {
        "_dump_version": 1,
        "label": "Update Note",
        "help_text": "Updates a note",
        "noun": "Note",
        "important": true,
        "hide": false,
        "url": "https://{{account}}.amocrm.com/private/api/v2/json/notes/set/",
        "custom_fields_url": "https://{{account}}.amocrm.com/private/api/v2/json/accounts/current",
        "sample_result_fields": [],
        "fields": {}
      }
    };
  }
});

module.exports = Actions;

