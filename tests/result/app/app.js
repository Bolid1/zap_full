//noinspection JSUnusedGlobalSymbols
var
_ = require("underscore"),
moment = require("moment");
"use strict";

var confSearches = {
  "contact_search": {
    "_dump_version": 1,
    "label": "Find Contact",
    "help_text": "Finds an existing contact",
    "noun": "Contact",
    "important": true,
    "hide": false,
    "url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/contacts/list/",
    "custom_fields_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/accounts/current/",
    "resource_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/contacts/list/?id={{id}}",
    "action_pair_label": "Find or Create Contact",
    "action_pair_key": "contact_add",
    "sample_result_fields": [],
    "fields": {
      "id": {
        "label": "ID",
        "required": false,
        "help_text": "Select an element with the specified ID (if this parameter is indicated, all other parameters will be ignored)",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": true,
        "prefill": null
      },
      "query": {
        "label": "Query",
        "required": false,
        "help_text": "Searched element, by a text query (Performs search in such fields as e-mail, phone and others; does not perform search in notes and tasks)",
        "placeholder": "Contact name",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Unicode",
        "list": false,
        "prefill": null
      }
    }
  },
  "lead_search": {
    "_dump_version": 1,
    "label": "Find Lead",
    "help_text": "Finds an existing lead",
    "noun": "Lead",
    "important": true,
    "hide": false,
    "url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/leads/list/",
    "custom_fields_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/accounts/current/",
    "resource_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/leads/list/?id={{id}}",
    "action_pair_label": "Find or Create Lead",
    "action_pair_key": "lead_add",
    "sample_result_fields": [],
    "fields": {
      "id": {
        "label": "ID",
        "required": false,
        "help_text": "Select an element with the specified ID (if this parameter is indicated, all other parameters will be ignored)",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": true,
        "prefill": null
      },
      "query": {
        "label": "Query",
        "required": false,
        "help_text": "Searched element, by a text query (Performs search in such fields as e-mail, phone and others; does not perform search in notes and tasks)",
        "placeholder": "Lead name",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Unicode",
        "list": false,
        "prefill": null
      }
    }
  },
  "company_search": {
    "_dump_version": 1,
    "label": "Find Company",
    "help_text": "Finds an existing company",
    "noun": "Company",
    "important": true,
    "hide": false,
    "url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/company/list/",
    "custom_fields_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/accounts/current/",
    "resource_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/company/list/?id={{id}}",
    "action_pair_label": "Find or Create Company",
    "action_pair_key": "company_add",
    "sample_result_fields": [],
    "fields": {
      "id": {
        "label": "ID",
        "required": false,
        "help_text": "Select an element with the specified ID (if this parameter is indicated, all other parameters will be ignored)",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": true,
        "prefill": null
      },
      "query": {
        "label": "Query",
        "required": false,
        "help_text": "Searched element, by a text query (Performs search in such fields as e-mail, phone and others; does not perform search in notes and tasks)",
        "placeholder": "Company name",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Unicode",
        "list": false,
        "prefill": null
      }
    }
  },
  "task_search": {
    "_dump_version": 1,
    "label": "Find Task",
    "help_text": "Finds an existing task",
    "noun": "Task",
    "important": false,
    "hide": false,
    "url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/tasks/list/",
    "custom_fields_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/accounts/current/",
    "resource_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/tasks/list/?id={{id}}",
    "action_pair_label": "Find or Create Task",
    "action_pair_key": "task_add",
    "sample_result_fields": [],
    "fields": {
      "id": {
        "label": "ID",
        "required": false,
        "help_text": "Select an element with the specified ID (if this parameter is indicated, all other parameters will be ignored)",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": true,
        "prefill": null
      },
      "element_id": {
        "label": "Element ID",
        "required": false,
        "help_text": "Additional search filter option by lead/contact ID",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": false,
        "prefill": null
      },
      "type": {
        "label": "Element Type",
        "required": false,
        "help_text": "Obtaining data only for contact or lead",
        "placeholder": "",
        "default": null,
        "choices": "contact|Contact,lead|Lead",
        "sort": null,
        "type_of": "Unicode",
        "list": false,
        "prefill": null
      }
    }
  },
  "note_search": {
    "_dump_version": 1,
    "label": "Find Note",
    "help_text": "Finds an existing note",
    "noun": "Note",
    "important": false,
    "hide": false,
    "url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/notes/list/",
    "custom_fields_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/accounts/current/",
    "resource_url": "https://{{account}}.amocrm.{{top_level_domain}}/private/api/v2/json/notes/list/?id={{id}}",
    "action_pair_label": "Find or Create Note",
    "action_pair_key": "note_add",
    "sample_result_fields": [],
    "fields": {
      "id": {
        "label": "ID",
        "required": false,
        "help_text": "Select an element with the specified ID (if this parameter is indicated, all other parameters will be ignored)",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": true,
        "prefill": null
      },
      "element_id": {
        "label": "Element ID",
        "required": false,
        "help_text": "Additional search filter option by lead/contact ID",
        "placeholder": "123456",
        "default": null,
        "choices": null,
        "sort": null,
        "type_of": "Integer",
        "list": false,
        "prefill": null
      },
      "type": {
        "label": "Element Type",
        "required": true,
        "help_text": "Obtaining data only for contact or lead",
        "placeholder": "",
        "default": null,
        "choices": "contact|Contact,lead|Lead",
        "sort": null,
        "type_of": "Unicode",
        "list": false,
        "prefill": null
      }
    }
  }
};

var URLParams = function () {};

_.extend(URLParams.prototype, {
  parseValue: function (value) {
    try {
      value = decodeURIComponent(value);
    } catch (e) {
    }

    try {
      return JSON.parse(value).toString();
    } catch (e) {
      return value.toString();
    }
  },

  parseValues: function (value) {
    try {
      value = decodeURIComponent(value);
    } catch (e) {
    }

    try {
      return JSON.parse(value);
    } catch (e) {
      return value.toString();
    }
  },

  parse: function (query) {
    var
      first_value,
      params = {};

    _.each(query.replace(/\+/g, ' ').split('&'), function (pair) {
      pair = pair.split('=');
      pair[0] = decodeURIComponent(pair[0]);

      if (typeof params[pair[0]] !== 'undefined') {
        if (params[pair[0]] instanceof Array) {
          params[pair[0]].push(this.parseValue(pair[1] || ''));
        } else {
          first_value = params[pair[0]].toString();
          params[pair[0]] = [first_value, this.parseValue(pair[1] || '')];
        }
      } else if (pair[0].indexOf('[', 1) > 0) {
        var second_pair = pair[0].split('[');
        second_pair[second_pair.length] = this.parseValue(pair[1]);
        var i = 0,
          f = function (p, sp) {
            if (i < sp.length - 1) {
              sp[i] = sp[i].replace(']', '');
              p[sp[i]] = p[sp[i]] || {};
              var o = p[sp[i]];
              i++;
              if (i == sp.length - 1) {
                p[sp[i - 1]] = sp[i];
              } else {
                f(o, sp);
              }
            }
          };

        f(params, second_pair);
      } else {
        params[pair[0]] = this.parseValues(pair[1] || '');
      }
    }, this);

    return params;
  },

  buildUrl: function (subdomain, path) {
    return 'https://' + subdomain + '.amocrm.com/' + path;
  }
});

URLParams = new URLParams();

var CustomFields = function () {};

_.extend(CustomFields.prototype, {
  _types: {
    1: {
      code: 'text',
      type: 'unicode'
    },
    2: {
      code: 'numeric',
      type: 'int'
    },
    3: {
      code: 'checkbox',
      type: 'bool'
    },
    4: {
      code: 'select',
      type: 'int'
    },
    5: {
      code: 'multiselect',
      type: 'int'
    },
    6: {
      code: 'date',
      type: 'datetime'
    },
    7: {
      code: 'url',
      type: 'unicode'
    },
    8: {
      code: 'multitext',
      type: 'unicode'
    },
    9: {
      code: 'textarea',
      type: 'text'
    },
    10: {
      code: 'radiobutton',
      type: 'int'
    },
    11: {
      code: 'streetaddress',
      type: 'text'
    },
    13: {
      code: 'smart_address',
      type: 'unicode',
      variants: {
        country: {
          US: "United States",
          AF: "Afghanistan",
          AX: "Aland Islands",
          AL: "Albania",
          DZ: "Algeria",
          AS: "American Samoa",
          AD: "Andorra",
          AO: "Angola",
          AI: "Anguilla",
          AQ: "Antarctica",
          AG: "Antigua and Barbuda",
          AR: "Argentina",
          AM: "Armenia",
          AW: "Aruba",
          AU: "Australia",
          AT: "Austria",
          AZ: "Azerbaijan",
          BS: "Bahamas",
          BH: "Bahrain",
          BD: "Bangladesh",
          BB: "Barbados",
          BY: "Belarus",
          BE: "Belgium",
          BZ: "Belize",
          BJ: "Benin",
          BM: "Bermuda",
          BT: "Bhutan",
          BO: "Bolivia",
          BA: "Bosnia and Herzegovina",
          BW: "Botswana",
          BV: "Bouvet Island",
          BR: "Brazil",
          BQ: "British Antarctic Territory",
          IO: "British Indian Ocean Territory",
          BN: "Brunei Darussalam",
          BG: "Bulgaria",
          BF: "Burkina Faso",
          BI: "Burundi",
          KH: "Cambodia",
          CM: "Cameroon",
          CA: "Canada",
          CT: "Canton and Enderbury Islands",
          CV: "Cape Verde",
          KY: "Cayman Islands",
          CF: "Central African Republic",
          TD: "Chad",
          CL: "Chile",
          CN: "China",
          CX: "Christmas Island",
          CC: "Cocos [Keeling] Islands",
          CO: "Colombia",
          KM: "Comoros",
          CG: "Congo",
          CD: "Congo, the Democratic Republic of the",
          CK: "Cook Islands",
          CR: "Costa Rica",
          HR: "Croatia",
          CU: "Cuba",
          CW: "Curacao",
          CY: "Cyprus",
          CZ: "Czech Republic",
          CI: "Cote d'Ivoire",
          DK: "Denmark",
          DJ: "Djibouti",
          DM: "Dominica",
          DO: "Dominican Republic",
          NQ: "Dronning Maud Land",
          DD: "East Germany",
          EC: "Ecuador",
          EG: "Egypt",
          SV: "El Salvador",
          GQ: "Equatorial Guinea",
          ER: "Eritrea",
          EE: "Estonia",
          ET: "Ethiopia",
          FK: "Falkland Islands (Malvinas)",
          FO: "Faroe Islands",
          FJ: "Fiji",
          FI: "Finland",
          FR: "France",
          GF: "French Guiana",
          PF: "French Polynesia",
          TF: "French Southern Territories",
          FQ: "French Southern and Antarctic Territories",
          GA: "Gabon",
          GM: "Gambia",
          GE: "Georgia",
          DE: "Germany",
          GH: "Ghana",
          GI: "Gibraltar",
          GR: "Greece",
          GL: "Greenland",
          GD: "Grenada",
          GP: "Guadeloupe",
          GU: "Guam",
          GT: "Guatemala",
          GG: "Guernsey",
          GN: "Guinea",
          GW: "Guinea-Bissau",
          GY: "Guyana",
          HT: "Haiti",
          HM: "Heard Island and McDonald Islands",
          HN: "Honduras",
          HK: "Hong Kong SAR China",
          HU: "Hungary",
          IS: "Iceland",
          IN: "India",
          ID: "Indonesia",
          IR: "Iran, Islamic Republic of",
          IQ: "Iraq",
          IE: "Ireland",
          IM: "Isle of Man",
          IL: "Israel",
          IT: "Italy",
          JM: "Jamaica",
          JP: "Japan",
          JE: "Jersey",
          JT: "Johnston Island",
          JO: "Jordan",
          KZ: "Kazakhstan",
          KE: "Kenya",
          KI: "Kiribati",
          KR: "Korea, Republic of",
          KP: "Korea, Democratic People's Republic of",
          KW: "Kuwait",
          KG: "Kyrgyzstan",
          LA: "Lao People's Democratic Republic",
          LV: "Latvia",
          LB: "Lebanon",
          LS: "Lesotho",
          LR: "Liberia",
          LY: "Libyan Arab Jamahiriya",
          LI: "Liechtenstein",
          LT: "Lithuania",
          LU: "Luxembourg",
          MO: "Macau SAR China",
          MK: "Macedonia, The Former Yugoslav Republic Of",
          MG: "Madagascar",
          MW: "Malawi",
          MY: "Malaysia",
          MV: "Maldives",
          ML: "Mali",
          MT: "Malta",
          MH: "Marshall Islands",
          MQ: "Martinique",
          MR: "Mauritania",
          MU: "Mauritius",
          YT: "Mayotte",
          FX: "Metropolitan France",
          MX: "Mexico",
          FM: "Micronesia, Federated States of",
          MI: "Midway Islands",
          MD: "Moldova, Republic of",
          MC: "Monaco",
          MN: "Mongolia",
          ME: "Montenegro",
          MS: "Montserrat",
          MA: "Morocco",
          MZ: "Mozambique",
          MM: "Myanmar [Burma]",
          NA: "Namibia",
          NR: "Nauru",
          NP: "Nepal",
          NL: "Netherlands",
          AN: "Netherlands Antilles",
          NT: "Neutral Zone",
          NC: "New Caledonia",
          NZ: "New Zealand",
          NI: "Nicaragua",
          NE: "Niger",
          NG: "Nigeria",
          NU: "Niue",
          NF: "Norfolk Island",
          VD: "North Vietnam",
          MP: "Northern Mariana Islands",
          NO: "Norway",
          OM: "Oman",
          PC: "Pacific Islands Trust Territory",
          PK: "Pakistan",
          PW: "Palau",
          PS: "Palestinian Territory, Occupied",
          PA: "Panama",
          PZ: "Panama Canal Zone",
          PG: "Papua New Guinea",
          PY: "Paraguay",
          YD: "People's Democratic Republic of Yemen",
          PE: "Peru",
          PH: "Philippines",
          PN: "Pitcairn Islands",
          PL: "Poland",
          PT: "Portugal",
          PR: "Puerto Rico",
          QA: "Qatar",
          RO: "Romania",
          RU: "Russia",
          RW: "Rwanda",
          RE: "Reunion",
          BL: "Saint Barthelemy",
          SH: "Saint Helena",
          KN: "Saint Kitts and Nevis",
          LC: "Saint Lucia",
          MF: "Saint Martin",
          PM: "Saint Pierre and Miquelon",
          VC: "Saint Vincent and the Grenadines",
          WS: "Samoa",
          SM: "San Marino",
          SA: "Saudi Arabia",
          SN: "Senegal",
          RS: "Serbia",
          CS: "Serbia and Montenegro",
          SC: "Seychelles",
          SL: "Sierra Leone",
          SG: "Singapore",
          SK: "Slovakia",
          SI: "Slovenia",
          SB: "Solomon Islands",
          SO: "Somalia",
          ZA: "South Africa",
          GS: "South Georgia and the South Sandwich Islands",
          ES: "Spain",
          LK: "Sri Lanka",
          SD: "Sudan",
          SR: "Suriname",
          SJ: "Svalbard and Jan Mayen",
          SZ: "Swaziland",
          SE: "Sweden",
          CH: "Switzerland",
          SY: "Syrian Arab Republic",
          ST: "Sao Tome and Principe",
          TW: "Taiwan",
          TJ: "Tajikistan",
          TZ: "Tanzania, United Republic of",
          TH: "Thailand",
          TL: "Timor-Leste",
          TG: "Togo",
          TK: "Tokelau",
          TO: "Tonga",
          TT: "Trinidad and Tobago",
          TN: "Tunisia",
          TR: "Turkey",
          TM: "Turkmenistan",
          TC: "Turks and Caicos Islands",
          TV: "Tuvalu",
          UM: "United States Minor Outlying Islands",
          PU: "U.S. Miscellaneous Pacific Islands",
          UG: "Uganda",
          UA: "Ukraine",
          SU: "Union of Soviet Socialist Republics",
          AE: "United Arab Emirates",
          GB: "United Kingdom",
          ZZ: "Unknown or Invalid Region",
          UY: "Uruguay",
          UZ: "Uzbekistan",
          VU: "Vanuatu",
          VA: "Holy See (Vatican City State)",
          VE: "Venezuela",
          VN: "Viet Nam",
          VG: "Virgin Islands, British",
          VI: "Virgin Islands, U.S.",
          WK: "Wake Island",
          WF: "Wallis and Futuna",
          EH: "Western Sahara",
          YE: "Yemen",
          ZM: "Zambia",
          ZW: "Zimbabwe"
        }
      }
    },
    14: {
      code: 'birthday',
      type: 'datetime'
    }
  },

  _note_types: {
    1: {
      id: 1,
      name: "",
      code: "DEAL_CREATED",
      editable: "N"
    },
    2: {
      id: 2,
      name: "",
      code: "CONTACT_CREATED",
      editable: "N"
    },
    3: {
      id: 3,
      name: "",
      code: "DEAL_STATUS_CHANGED",
      editable: "N"
    },
    4: {
      id: 4,
      name: "",
      code: "COMMON",
      editable: "Y"
    },
    5: {
      id: 5,
      name: "",
      code: "ATTACHEMENT",
      editable: "N"
    },
    6: {
      id: 6,
      name: "",
      code: "CALL",
      editable: "N"
    },
    7: {
      id: 7,
      name: "",
      code: "MAIL_MESSAGE",
      editable: "N"
    },
    8: {
      id: 8,
      name: "",
      code: "MAIL_MESSAGE_ATTACHMENT",
      editable: "N"
    },
    9: {
      id: 9,
      name: "",
      code: "EXTERNAL_ATTACH",
      editable: "N"
    },
    10: {
      id: 10,
      name: "",
      code: "CALL_IN",
      editable: "N"
    },
    11: {
      id: 11,
      name: "",
      code: "CALL_OUT",
      editable: "N"
    },
    12: {
      id: 12,
      name: "",
      code: "COMPANY_CREATED",
      editable: "N"
    },
    13: {
      id: 13,
      name: "",
      code: "TASK_RESULT",
      editable: "N"
    },
    99: {
      id: 99,
      name: "",
      code: "MAX_SYSTEM",
      editable: "N"
    },
    101: {
      id: 101,
      name: "Link",
      code: "DROPBOX",
      editable: "N"
    },
    102: {
      id: 102,
      name: "Incoming",
      code: "SMS_IN",
      editable: "N"
    },
    103: {
      id: 103,
      name: "Outgoing",
      code: "SMS_OUT",
      editable: "N"
    }
  },

  getType: function (type_id, prop) {
    var result = this._types;

    if (type_id) {
      result = typeof result[type_id] !== 'undefined' ? result[type_id] : null;
      if (prop) {
        result = typeof result[prop] !== 'undefined' ? result[prop] : null;
      }
    }

    return result;
  },

  getNoteType: function (type_id, prop) {
    var result = this._note_types;

    if (type_id) {
      if (_.isNumber(type_id)) {
        result = typeof result[type_id] !== 'undefined' ? result[type_id] : null;
      } else {
        result = _.findWhere(_.values(result), {code: type_id.toString().toUpperCase()});
      }

      if (result && prop) {
        result = typeof result[prop] !== 'undefined' ? result[prop] : null;
      }
    }

    return result;
  },

  getBaseFields: function (action, entity, users, statuses, pipelines) {
    var
      entity_name = Application.convertEntityName(entity, 'single', true),
      entity_name_lowercase = Application.convertEntityName(entity, 'single', false),
      zap_action,
      result,
      is_action_add,
      is_all = action === 'all';

    if (!is_all) {
      action = action.split('_');
      zap_action = action[0];
      action = action[1];
    }

    result = [
      {
        type: 'int',
        key: 'responsible_user_id',
        label: 'Unique identified of a responsible user',
        choices: users ? users : undefined
      }
    ];

    if (zap_action === 'action' && action === 'search') {
      return result;
    }

    // Set base fields for all
    is_action_add = zap_action === 'action' && action === 'add';

    result = result.concat([
      {
        type: 'unicode',
        key: 'name',
        label: entity_name + ' name',
        required: is_action_add
      },
      {
        type: 'datetime',
        key: 'date_create',
        label: 'Date of creation of this ' + entity_name_lowercase
      }
    ]);

    if (!is_action_add || is_all) {
      result.push({
        type: 'int',
        key: 'id',
        label: 'Unique ' + entity_name_lowercase + ' identifier',
        required: true
      });
    }

    if (zap_action === 'hook' || is_all) {
      result = result.concat([
        {
          type: 'datetime',
          key: 'last_modified',
          label: 'Date when ' + entity_name_lowercase + ' was modified'
        },
        {
          type: 'int',
          key: 'created_user_id',
          label: 'Unique identified of a user which has created this ' + entity_name_lowercase,
          choices: users ? users : undefined
        },
        {
          type: 'int',
          key: 'modified_user_id',
          label: 'Unique identified of a user which has modified this ' + entity_name_lowercase,
          choices: users ? users : undefined
        }
      ]);

      if (zap_action === 'hook' && entity_name_lowercase !== 'lead' || is_all) {
        result.push({
          type: 'int',
          key: 'group_id',
          label: 'Unique identified of a group'
        });
      }

      if (zap_action === 'hook' && entity_name_lowercase !== 'lead' || zap_action === 'action' || is_all) {
        result.push({
          type: 'unicode',
          key: 'tags',
          label: 'Tag names separated by commas'
        });
      }

      if (zap_action === 'hook' && entity_name_lowercase === 'contact' || is_all) {
        result.push({
          type: 'int',
          key: 'linked_company_id',
          label: 'Unique identified of a linked company'
        });
      }

      if (zap_action === 'hook' && action === 'status' || is_all) {
        result.push({
          type: 'int',
          key: 'old_status_id',
          label: 'Unique previous status identifier'
        });
      }

      if (zap_action === 'hook' && action === 'responsible' || is_all) {
        result.push({
          type: 'int',
          key: 'old_responsible_user_id',
          label: 'Unique identified of a previous responsible user',
          choices: users ? users : undefined
        });
      }
    }

    if (entity_name_lowercase === 'contact' || is_all) {
      result.push({
        type: 'unicode',
        key: 'company_name',
        label: 'Company name'
      });
    }

    if (entity_name_lowercase === 'lead' || is_all) {
      result = result.concat([
        {
          type: 'int',
          key: 'price',
          label: 'Lead budget'
        },
        {
          type: 'int',
          key: 'status_id',
          label: 'Unique status identifier',
          choices: statuses ? statuses : undefined,
          required: is_action_add
        }
      ]);
    }

    if (zap_action === 'hook' || pipelines || is_all) {
      result.push({
        type: 'int',
        key: 'pipeline_id',
        label: 'ID of the pipeline in which ' + entity_name_lowercase + ' located' + (zap_action === 'action' ? ' (for closed statuses)' : ''),
        choices: pipelines
      });
    }

    return result;
  },

  getAdditionsFields: function (action, entity, users, types) {
    var
      entity_name = Application.convertEntityName(entity, 'single', true),
      entity_name_lowercase = Application.convertEntityName(entity, 'single', false),
      zap_action,
      result,
      is_action_add,
      is_all = action === 'all';

    if (!is_all) {
      action = action.split('_');
      zap_action = action[0];
      action = action[1];
    }

    result = [
      {
        type: 'int',
        key: 'responsible_user_id',
        label: 'Unique identified of a responsible user',
        choices: users ? users : undefined
      }
    ];

    if (zap_action === 'action' && action === 'search') {
      return result;
    }

    // Set base fields for all
    is_action_add = zap_action === 'action' && action === 'add';

    result = result.concat([
      {
        type: 'datetime',
        key: 'date_create',
        label: 'Date of creation of this ' + entity_name_lowercase
      },
      {
        type: 'int',
        key: 'element_id',
        label: 'Unique identifier of the contact or lead (contact/lead must be indicated in element_type)',
        required: true
      },
      {
        type: 'int',
        key: 'element_type',
        label: 'Type of element to be linked',
        choices: {
          1: Application.convertEntityName('contact', 'single', true),
          2: Application.convertEntityName('lead', 'single', true),
          3: Application.convertEntityName('company', 'single', true)
        },
        required: true
      }
    ]);

    if (is_all) {
      result = result.concat([
        {
          type: 'int',
          key: 'created_user_id',
          label: 'Unique identified of a user which has created this ' + entity_name_lowercase,
          choices: users ? users : undefined
        },
        {
          type: 'datetime',
          key: 'last_modified',
          label: 'Date when ' + entity_name_lowercase + ' was modified'
        },
        {
          type: 'unicode',
          key: 'editable',
          label: 'Indicates possibility of editing this ' + entity_name_lowercase + ': "Y" or "N"'
        },
        {
          type: 'int',
          key: 'group_id',
          label: 'Unique identified of a group'
        }
      ]);
    }

    if (!is_action_add || is_all) {
      result.push({
        type: 'int',
        key: 'id',
        label: 'Unique ' + entity_name_lowercase + ' identifier',
        required: true
      });
    }

    result.push({
      type: 'text',
      key: 'text',
      label: 'Text of ' + entity_name_lowercase,
      required: is_action_add || entity_name_lowercase === 'task'
    });

    if (entity_name_lowercase === 'task') {
      result = result.concat([
        {
          type: 'datetime',
          key: 'complete_till',
          label: 'A date by which the task must be completed. If time has value 23:59, then \"All day\" will be displayed in system interfaces instead of time.',
          required: is_action_add
        },
        {
          type: 'int',
          key: entity_name_lowercase + '_type',
          label: entity_name + ' type',
          choices: types ? types : undefined,
          required: is_action_add
        }
      ]);
    }

    if (entity_name_lowercase === 'note') {
      result.push({
        type: 'int',
        key: 'note_type',
        label: 'Note type',
        choices: users ? users : undefined
      });
    }

    return result;
  },

  convertFromApi: function (custom_fields, action) {
    var result = {};

    _.each(custom_fields, function (custom_field) {
      var cf_value, tmp;

      if (!custom_field.code) {
        custom_field.code = '';
      }

      switch (custom_field.code.toUpperCase()) {
        case 'SMART_ADDRESS':
          cf_value = {};
          _.each(custom_field.values, function (val) {
            cf_value[val.subtype] = val.value;
          });
          break;
        case 'PHONE':
        case 'EMAIL':
        case 'IM':
          cf_value = {};
          tmp = {};
          _.each(custom_field.values, function (val) {
            var option = val && val['enum'] ? val['enum'] : null;
            if (!option) {
              return;
            }

            if (!tmp[option]) {
              tmp[option] = [];
            }

            tmp[option].push(val.value);
          });

          _.each(tmp, function (value, key) {
            cf_value[key] = value.join(', ');
          });
          break;
        // case 'WEB':
        // case 'POSITION':
        // case 'ADDRESS':
        default:
          tmp = [];
          _.each(custom_field.values, function (val) {
            tmp.push((typeof val.value !== 'undefined' ? val.value : val));
          });
          cf_value = tmp.join(', ');
          break;
      }

      if (!cf_value) {
        return;
      }

      if (action === 'read' && custom_field.name) {
        result[custom_field.name] = cf_value;
        return;
      }
      result[custom_field.id] = cf_value;
    }, this);

    return result;
  },

  convertFromAccountInfo: function (account_custom_fields) {
    var custom_fields = [];

    _.each(account_custom_fields, function (account_custom_field) {
      if (!(account_custom_field && account_custom_field.type_id)) {
        return;
      }

      var
        cf_type = this.getType(account_custom_field.type_id),
        cf_key = ['custom_fields', account_custom_field.id].join('__');

      if (!cf_type) {
        return;
      }

      switch (cf_type.code) {
        case 'radiobutton':
        case 'select':
          custom_fields.push({
            type: cf_type.type,
            key: cf_key,
            label: account_custom_field.name,
            choices: account_custom_field.enums
          });
          break;

        case 'multiselect':
          custom_fields.push({
            type: cf_type.type,
            key: cf_key,
            label: account_custom_field.name,
            choices: account_custom_field.enums,
            list: true
          });
          break;

        case 'multitext':
          _.each(account_custom_field.enums, function (enum_name, enum_id) {
            custom_fields.push({
              type: cf_type.type,
              key: [cf_key, enum_id].join('__'),
              label: [account_custom_field.name, enum_name].join(' '),
              list: true
            });
          });
          break;

        case 'url':
        case 'textarea':
        case 'streetaddress':
        case 'text':
        case 'numeric':
        case 'checkbox':
        case 'date':
        case 'birthday':
          custom_fields.push({
            type: cf_type.type,
            key: cf_key,
            label: account_custom_field.name
          });
          break;

        case 'smart_address':
          _.each(account_custom_field.subtypes, function (subtype) {
            var value = {
              type: cf_type.type,
              key: [cf_key, subtype.name].join('__'),
              label: subtype.title
            };
            if (subtype.name === 'country') {
              value.choices = cf_type.variants.country;
            }
            custom_fields.push(value);
          });
          break;
      }
    }, this);

    return custom_fields;
  },

  convertToApi: function (type, custom_fields) {
    var result = [];

    _.each(custom_fields, function (custom_field, cf_id) {
      var values = [];

      if (_.isObject(custom_field)) {
        _.each(custom_field, function (enum_value, enum_id) {
          if (!_.isArray(enum_value)) {
            enum_value = [enum_value];
          }

          _.each(enum_value, function (value) {
            values.push({
              value: value,
              'enum': enum_id,
              subtype: enum_id
            });
          });
        });
      } else {
        values.push({
          value: _.isArray(custom_field) ? custom_field.join(', ') : custom_field
        });
      }

      result.push({
        id: cf_id,
        values: values
      });
    });

    return result;
  },

  convertDateToTimestamp: function (date) {
    if (!date) {
      return 0;
    }

    if (date.replace(/\D/g, '') == date) {
      return;
    }

    date = date.replace('datetime-', '');
    return moment(new Date(date)).format('X');
  }
});

CustomFields = new CustomFields();


var Application = function () {};

_.extend(Application.prototype, {
  delete_catch_hook: function (type, bundle) {
    type = this.convertEntityName(type, 'api_name');
    var result = {
      id: 0,
      url: URLParams.buildUrl(bundle.auth_fields.account, type + '/trash/'),
      subdomain: bundle.auth_fields.account
    }, data;

    if (bundle.request.content) {
      data = URLParams.parse(bundle.request.content);
      if (data && data[type] && data[type]['delete']) {
        data = data[type]['delete'];
        if (data[0] && data[0]['id']) {
          result.id = data[0]['id'];
          result.url += '?filter[ID][]=' + result.id;
        }
      }
    }

    return result;
  },

  deletePostPoll: function (type, bundle) {
    bundle.request.content = bundle.response.content;

    return this.delete_catch_hook(type, bundle);
  },

  pre_read_resource: function (type, bundle) {
    bundle.search_fields = bundle.read_context;

    return this.pre_search(type, bundle);
  },

  post_read_resource: function (type, bundle) {
    type = this.convertEntityName(type, 'many');
    var
      tmp,
      entities = [],
      content = {},
      api_name = this.convertEntityName(type, 'api_name');

    if (bundle.response.status_code == 204) {
      return {};
    }

    if (bundle.response.content) {
      /** @var {String} tmp */
      tmp = bundle.response.content;
      /** @var {Object} tmp */
      tmp = _.isString(tmp) ? JSON.parse(tmp) : tmp;
      if (tmp && tmp.response && tmp.response[api_name]) {
        entities = tmp.response[api_name];
      }
    }

    if (!entities[0]) {
      return {};
    }

    content[api_name] = {read: [entities[0]]};

    content = this.convertEntity('read', type, content, bundle.auth_fields.account);

    return this.convertForRead(type, content);
  },

  pre_search: function (type, bundle) {
    var
      search_fields = bundle.search_fields,
      avail_search_fields = _.keys(confSearches[type + '_search'].fields);

    _.each(this.getBaseFields(type), function (field) {
      avail_search_fields.push(field.key);
    });

    if (search_fields.element_type) {
      search_fields.type = this.convertEntityName(search_fields.element_type, 'single');

      if (type === 'note' || type === 'task') {
        search_fields.type = search_fields.type === 'lead' ? search_fields.type : 'contact';
      }
    }

    search_fields = _.pick(search_fields, avail_search_fields);

    bundle.request.params = _.extend(bundle.request.params, search_fields);
    return bundle.request;
  },

  post_search: function (type, bundle) {
    type = this.convertEntityName(type, 'many');
    var
      tmp,
      entities = [],
      api_name = this.convertEntityName(type, 'api_name');

    if (bundle.response.status_code == 204) {
      return [];
    }

    if (bundle.response.content) {
      /** @var {String} tmp */
      tmp = bundle.response.content;
      /** @var {Object} tmp */
      tmp = _.isString(tmp) ? JSON.parse(tmp) : tmp;
      if (tmp && tmp.response && tmp.response[api_name]) {
        entities = tmp.response[api_name];
      }
    }

    entities = _.sortBy(entities, 'last_modified').reverse();
    tmp = _.map(entities, function (entity) {
      var content = {};
      content[api_name] = {search: [entity]};
      return this.convertEntity('search', type, content, bundle.auth_fields.account);
    }, this);

    return tmp;
  },

  post_write: function (action, type, bundle) {
    type = this.convertEntityName(type, 'many');
    var tmp,
      api_name = this.convertEntityName(type, 'api_name'),
      result = {
        id: 0,
        subdomain: bundle.auth_fields.account
      };

    if (bundle.response.content) {
      /** @var {String} tmp */
      tmp = bundle.response.content;
      /** @var {Object} tmp */
      tmp = _.isString(tmp) ? JSON.parse(tmp) : tmp;
      if (tmp && tmp.response && tmp.response[api_name]) {
        tmp = tmp.response[api_name];
        if (tmp[action] && tmp[action][0] && tmp[action][0].id) {
          result.id = tmp[action][0].id;
        }
      }
    }

    if (result.id && (type === 'contacts' || type === 'leads' || type === 'companies')) {
      result.url = URLParams.buildUrl(bundle.auth_fields.account, type + '/detail/' + result.id);
    }

    return result;
  },

  pre_write: function (action, type, bundle) {
    var
      api_name = this.convertEntityName(type, 'api_name'),
      data = bundle.action_fields,
      request_data = {},
      base_fields;

    if (!data) {
      return bundle.request;
    }

    _.each(['date_create', 'complete_till'], function (key) {
      if (data[key]) {
        data[key] = CustomFields.convertDateToTimestamp(data[key]);
      }
    });

    if (action === 'add' && api_name === 'notes') {
      data.note_type = CustomFields.getNoteType('common', 'id');
    }

    if (action !== 'add') {
      data.last_modified = moment().format('X');
    }

    if (data.custom_fields) {
      data.custom_fields = CustomFields.convertToApi(type, data.custom_fields);
    }

    if (type === 'task' || type === 'note') {
      base_fields = CustomFields.getAdditionsFields('action_' + action, type);
      base_fields = _.map(base_fields, function (field) {
        return field.key;
      });
      base_fields.push('last_modified');
      data = _.pick(data, base_fields);
    }

    request_data[api_name] = {};
    request_data[api_name][action] = [data];

    bundle.request.data = JSON.stringify({request: request_data});

    return bundle.request;
  },

  subscribe_holder: function (type, bundle) {
    var result = {
      request: {webhooks: {}}
    };

    result.request.webhooks[type] = [
      {
        url: bundle.subscription_url,
        events: bundle.event
      }
    ];

    bundle.request.data = JSON.stringify(result);

    return bundle.request;
  },

  convertEntityName: function (entity, type, uc_first) {
    var
      names = [
        {
          many: 'contacts',
          single: 'contact',
          api_name: 'contacts',
          id: 1
        },
        {
          many: 'companies',
          single: 'company',
          api_name: 'contacts',
          id: 3
        },
        {
          many: 'leads',
          single: 'lead',
          api_name: 'leads',
          id: 2
        },
        {
          many: 'tasks',
          single: 'task',
          api_name: 'tasks',
          id: 4
        },
        {
          many: 'notes',
          single: 'note',
          api_name: 'notes',
          id: 5
        }
      ],
      result = false;

    entity = entity.toString();

    _.each(names, function (names_array) {
      if (result) {
        return;
      }

      var found = false;
      _.each(names_array, function (name) {
        if (name.toString() === entity) {
          found = true;
        }
      });

      if (found) {
        result = names_array[type];
      }
    });

    result = result || '';
    if (result && uc_first) {
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    return result;
  },

  prepareFieldsFromAccount: function (action, entity, content) {
    if (entity === 'task' || entity === 'note') {
      return this.prepareFieldsFromAccountForAdditions(action, entity, content);
    }

    var account, tmp, users, statuses, pipelines,
      custom_fields;

    account = content ? JSON.parse(content) : null;
    if (!(account && account.response && account.response.account)) {
      return CustomFields.getBaseFields(action, entity);
    }

    account = account.response.account;

    if (account.users) {
      users = {};
      _.each(account.users, function (user) {
        users[user.id] = user.name;
      });
    }

    if (account.leads_statuses) {
      statuses = {};
      _.each(account.leads_statuses, function (status) {
        var pipeline = account.pipelines[status.pipeline_id];
        statuses[status.id] = (pipeline && pipeline.name ? pipeline.name + ': ' : '') + status.name;
      });
    }

    if (account.pipelines) {
      pipelines = {};
      _.each(account.pipelines, function (pipeline) {
        pipelines[pipeline.id] = pipeline.name;
      });
    }

    custom_fields = CustomFields.getBaseFields(action, entity, users, statuses, pipelines);

    if (account.custom_fields && action !== 'action_search') {
      tmp = account.custom_fields[this.convertEntityName(entity, 'many')];
      tmp = CustomFields.convertFromAccountInfo(tmp);
      _.each(tmp, function (field) {
        custom_fields.push(field);
      });
    }

    return custom_fields;
  },

  prepareFieldsFromAccountForAdditions: function (action, entity, content) {
    var account, users, tmp, types, entity_name;

    account = content ? JSON.parse(content) : null;
    if (!(account && account.response && account.response.account)) {
      return CustomFields.getAdditionsFields(action, entity);
    }

    account = account.response.account;
    entity_name = this.convertEntityName(entity, 'single', false);
    tmp = entity_name + '_types';
    if (entity_name === 'task' && account[tmp]) {
      types = {};
      _.each(account[tmp], function (type) {
        types[type.id] = type.name.toString().trim();
      });
    }

    if (account.users) {
      users = {};
      _.each(account.users, function (user) {
        users[user.id] = user.name;
      });
    }

    return CustomFields.getAdditionsFields(action, entity, users, types);
  },

  convertEntity: function (action, type, content, subdomain) {
    var
      result,
      entity = {},
      fields = [
        'id',
        'name',
        'created_user_id',
        'modified_user_id',
        'pipeline_id',
        'responsible_user_id',
        'old_responsible_user_id',
        'group_id',
        'price',
        'status_id',
        'old_status_id',
        'element_id',
        'element_type',
        'note_type',
        'text',
        'editable'
      ];

    if (this.convertEntityName(type, 'single') !== 'company') {
      fields = fields.concat([
        'linked_company_id',
        'company_name'
      ]);
    }

    if (!content) {
      return entity;
    }

    if (_.isString(content)) {
      content = URLParams.parse(content);
    }

    if (!(content[this.convertEntityName(type, 'api_name')][action][0])) {
      return entity;
    }

    entity = content[this.convertEntityName(type, 'api_name')][action][0];

    result = _.pick(entity, fields);
    if (entity.tags) {
      result.tags = _.map(entity.tags, function (tag) {
        return tag.name;
      }).join(', ');
    }

    _.each(['date_create', 'last_modified'], function (field) {
      if (!entity[field]) {
        return;
      }

      var
        timestamp = parseInt(entity[field], 10),
        date = new Date();

      date.setTime(timestamp * 1000);

      result[field] = date.toLocaleString('en-US', {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
    });

    result.custom_fields = CustomFields.convertFromApi(entity.custom_fields, action);

    if (_.indexOf(['contacts', 'leads', 'companies'], this.convertEntityName(type, 'many')) > -1) {
      result.link = URLParams.buildUrl(subdomain, this.convertEntityName(type, 'many') + '/detail/' + result.id);
    }

    return result;
  },

  getBaseFields: function (type) {
    var base_fields;
    switch (type) {
      case 'tasks':
      case 'notes':
        base_fields = CustomFields.getAdditionsFields('all', type);
        break;
      default:
        base_fields = CustomFields.getBaseFields('all', type);
        break;
    }
    return base_fields;
  },

  convertForRead: function (type, entity) {
    var base_fields = this.getBaseFields(type);

    _.each(base_fields, function (field) {
      if (typeof entity[field.key] === 'undefined') {
        return;
      }

      entity[field.label] = entity[field.key];

      delete entity[field.key];
    });

    _.each(entity.custom_fields, function (cf_value, cf_name) {
      entity['CF: ' + cf_name] = cf_value;
    });
    delete entity.custom_fields;


    return entity;
  },

  hooksPrePoll: function (action, entity, bundle) {
    return {
      url: bundle.request.url,
      method: bundle.request.method,
      auth: bundle.request.auth,
      headers: bundle.request.headers,
      params: _.extend(bundle.request.params, {type: 'query'}),
      data: bundle.request.data
    };
  }
});

Application = new Application();


var Zap;
//noinspection JSUnusedGlobalSymbols
Zap = {
  pre_subscribe: function (bundle) {
    return Application.subscribe_holder('subscribe', bundle);
  },
  pre_unsubscribe: function (bundle) {
    return Application.subscribe_holder('unsubscribe', bundle);
  },
  restore_contact_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_restore', 'contact', bundle.response.content);
  },
  restore_contact_catch_hook: function (bundle) {
    return Application.convertEntity('restore', 'contact', bundle.request.content, bundle.auth_fields.account);
  },
  restore_contact_pre_poll: function (bundle) {
    return Application.hooksPrePoll('restore', 'contact', bundle);
  },
  restore_contact_post_poll: function (bundle) {
    return [Application.convertEntity('restore', 'contact', bundle.response.content, bundle.auth_fields.account)];
  },
  add_contact_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_add', 'contact', bundle.response.content);
  },
  add_contact_catch_hook: function (bundle) {
    return Application.convertEntity('add', 'contact', bundle.request.content, bundle.auth_fields.account);
  },
  add_contact_pre_poll: function (bundle) {
    return Application.hooksPrePoll('add', 'contact', bundle);
  },
  add_contact_post_poll: function (bundle) {
    return [Application.convertEntity('add', 'contact', bundle.response.content, bundle.auth_fields.account)];
  },
  update_contact_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_update', 'contact', bundle.response.content);
  },
  update_contact_catch_hook: function (bundle) {
    return Application.convertEntity('update', 'contact', bundle.request.content, bundle.auth_fields.account);
  },
  update_contact_pre_poll: function (bundle) {
    return Application.hooksPrePoll('update', 'contact', bundle);
  },
  update_contact_post_poll: function (bundle) {
    return [Application.convertEntity('update', 'contact', bundle.response.content, bundle.auth_fields.account)];
  },
  delete_contact_catch_hook: function (bundle) {
    return Application.delete_catch_hook('contact', bundle);
  },
  delete_contact_post_poll: function (bundle) {
    return [Application.deletePostPoll('contact', bundle)];
  },
  delete_contact_pre_poll: function (bundle) {
    return Application.hooksPrePoll('delete', 'contact', bundle);
  },
  contact_add_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_add', 'contact', bundle.response.content);
  },
  contact_add_pre_write: function (bundle) {
    return Application.pre_write('add', 'contact', bundle);
  },
  contact_add_post_write: function (bundle) {
    return Application.post_write('add', 'contact', bundle);
  },
  contact_update_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_update', 'contact', bundle.response.content);
  },
  contact_update_pre_write: function (bundle) {
    return Application.pre_write('update', 'contact', bundle);
  },
  contact_update_post_write: function (bundle) {
    return Application.post_write('update', 'contact', bundle);
  },
  contact_search_post_custom_search_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_search', 'contact', bundle.response.content);
  },
  contact_search_pre_search: function (bundle) {
    return Application.pre_search('contact', bundle);
  },
  contact_search_post_search: function (bundle) {
    return Application.post_search('contact', bundle);
  },
  contact_search_post_read_resource: function (bundle) {
    return Application.post_read_resource('contact', bundle);
  },
  restore_lead_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_restore', 'lead', bundle.response.content);
  },
  restore_lead_catch_hook: function (bundle) {
    return Application.convertEntity('restore', 'lead', bundle.request.content, bundle.auth_fields.account);
  },
  restore_lead_pre_poll: function (bundle) {
    return Application.hooksPrePoll('restore', 'lead', bundle);
  },
  restore_lead_post_poll: function (bundle) {
    return [Application.convertEntity('restore', 'lead', bundle.response.content, bundle.auth_fields.account)];
  },
  add_lead_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_add', 'lead', bundle.response.content);
  },
  add_lead_catch_hook: function (bundle) {
    return Application.convertEntity('add', 'lead', bundle.request.content, bundle.auth_fields.account);
  },
  add_lead_pre_poll: function (bundle) {
    return Application.hooksPrePoll('add', 'lead', bundle);
  },
  add_lead_post_poll: function (bundle) {
    return [Application.convertEntity('add', 'lead', bundle.response.content, bundle.auth_fields.account)];
  },
  update_lead_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_update', 'lead', bundle.response.content);
  },
  update_lead_catch_hook: function (bundle) {
    return Application.convertEntity('update', 'lead', bundle.request.content, bundle.auth_fields.account);
  },
  update_lead_pre_poll: function (bundle) {
    return Application.hooksPrePoll('update', 'lead', bundle);
  },
  update_lead_post_poll: function (bundle) {
    return [Application.convertEntity('update', 'lead', bundle.response.content, bundle.auth_fields.account)];
  },
  status_lead_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_status', 'lead', bundle.response.content);
  },
  status_lead_catch_hook: function (bundle) {
    return Application.convertEntity('status', 'lead', bundle.request.content, bundle.auth_fields.account);
  },
  status_lead_pre_poll: function (bundle) {
    return Application.hooksPrePoll('status', 'lead', bundle);
  },
  status_lead_post_poll: function (bundle) {
    return [Application.convertEntity('status', 'lead', bundle.response.content, bundle.auth_fields.account)];
  },
  responsible_lead_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_responsible', 'lead', bundle.response.content);
  },
  responsible_lead_catch_hook: function (bundle) {
    return Application.convertEntity('responsible', 'lead', bundle.request.content, bundle.auth_fields.account);
  },
  responsible_lead_pre_poll: function (bundle) {
    return Application.hooksPrePoll('responsible', 'lead', bundle);
  },
  responsible_lead_post_poll: function (bundle) {
    return [Application.convertEntity('responsible', 'lead', bundle.response.content, bundle.auth_fields.account)];
  },
  delete_lead_catch_hook: function (bundle) {
    return Application.delete_catch_hook('lead', bundle);
  },
  delete_lead_post_poll: function (bundle) {
    return [Application.deletePostPoll('lead', bundle)];
  },
  delete_lead_pre_poll: function (bundle) {
    return Application.hooksPrePoll('delete', 'lead', bundle);
  },
  lead_add_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_add', 'lead', bundle.response.content);
  },
  lead_add_pre_write: function (bundle) {
    return Application.pre_write('add', 'lead', bundle);
  },
  lead_add_post_write: function (bundle) {
    return Application.post_write('add', 'lead', bundle);
  },
  lead_update_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_update', 'lead', bundle.response.content);
  },
  lead_update_pre_write: function (bundle) {
    return Application.pre_write('update', 'lead', bundle);
  },
  lead_update_post_write: function (bundle) {
    return Application.post_write('update', 'lead', bundle);
  },
  lead_search_post_custom_search_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_search', 'lead', bundle.response.content);
  },
  lead_search_pre_search: function (bundle) {
    return Application.pre_search('lead', bundle);
  },
  lead_search_post_search: function (bundle) {
    return Application.post_search('lead', bundle);
  },
  lead_search_post_read_resource: function (bundle) {
    return Application.post_read_resource('lead', bundle);
  },
  restore_company_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_restore', 'company', bundle.response.content);
  },
  restore_company_catch_hook: function (bundle) {
    return Application.convertEntity('restore', 'company', bundle.request.content, bundle.auth_fields.account);
  },
  restore_company_pre_poll: function (bundle) {
    return Application.hooksPrePoll('restore', 'company', bundle);
  },
  restore_company_post_poll: function (bundle) {
    return [Application.convertEntity('restore', 'company', bundle.response.content, bundle.auth_fields.account)];
  },
  add_company_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_add', 'company', bundle.response.content);
  },
  add_company_catch_hook: function (bundle) {
    return Application.convertEntity('add', 'company', bundle.request.content, bundle.auth_fields.account);
  },
  add_company_pre_poll: function (bundle) {
    return Application.hooksPrePoll('add', 'company', bundle);
  },
  add_company_post_poll: function (bundle) {
    return [Application.convertEntity('add', 'company', bundle.response.content, bundle.auth_fields.account)];
  },
  update_company_post_custom_trigger_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('hook_update', 'company', bundle.response.content);
  },
  update_company_catch_hook: function (bundle) {
    return Application.convertEntity('update', 'company', bundle.request.content, bundle.auth_fields.account);
  },
  update_company_pre_poll: function (bundle) {
    return Application.hooksPrePoll('update', 'company', bundle);
  },
  update_company_post_poll: function (bundle) {
    return [Application.convertEntity('update', 'company', bundle.response.content, bundle.auth_fields.account)];
  },
  delete_company_catch_hook: function (bundle) {
    return Application.delete_catch_hook('company', bundle);
  },
  delete_company_post_poll: function (bundle) {
    return [Application.deletePostPoll('company', bundle)];
  },
  delete_company_pre_poll: function (bundle) {
    return Application.hooksPrePoll('delete', 'company', bundle);
  },
  company_add_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_add', 'company', bundle.response.content);
  },
  company_add_pre_write: function (bundle) {
    return Application.pre_write('add', 'company', bundle);
  },
  company_add_post_write: function (bundle) {
    return Application.post_write('add', 'company', bundle);
  },
  company_update_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_update', 'company', bundle.response.content);
  },
  company_update_pre_write: function (bundle) {
    return Application.pre_write('update', 'company', bundle);
  },
  company_update_post_write: function (bundle) {
    return Application.post_write('update', 'company', bundle);
  },
  company_search_post_custom_search_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_search', 'company', bundle.response.content);
  },
  company_search_pre_search: function (bundle) {
    return Application.pre_search('company', bundle);
  },
  company_search_post_search: function (bundle) {
    return Application.post_search('company', bundle);
  },
  company_search_post_read_resource: function (bundle) {
    return Application.post_read_resource('company', bundle);
  },
  task_add_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_add', 'task', bundle.response.content);
  },
  task_add_pre_write: function (bundle) {
    return Application.pre_write('add', 'task', bundle);
  },
  task_add_post_write: function (bundle) {
    return Application.post_write('add', 'task', bundle);
  },
  task_update_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_update', 'task', bundle.response.content);
  },
  task_update_pre_write: function (bundle) {
    return Application.pre_write('update', 'task', bundle);
  },
  task_update_post_write: function (bundle) {
    return Application.post_write('update', 'task', bundle);
  },
  task_search_post_custom_search_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_search', 'task', bundle.response.content);
  },
  task_search_pre_search: function (bundle) {
    return Application.pre_search('task', bundle);
  },
  task_search_post_search: function (bundle) {
    return Application.post_search('task', bundle);
  },
  task_search_pre_read_resource: function (bundle) {
    return Application.pre_read_resource('task', bundle);
  },
  task_search_post_read_resource: function (bundle) {
    return Application.post_read_resource('task', bundle);
  },
  note_add_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_add', 'note', bundle.response.content);
  },
  note_add_pre_write: function (bundle) {
    return Application.pre_write('add', 'note', bundle);
  },
  note_add_post_write: function (bundle) {
    return Application.post_write('add', 'note', bundle);
  },
  note_update_post_custom_action_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_update', 'note', bundle.response.content);
  },
  note_update_pre_write: function (bundle) {
    return Application.pre_write('update', 'note', bundle);
  },
  note_update_post_write: function (bundle) {
    return Application.post_write('update', 'note', bundle);
  },
  note_search_post_custom_search_fields: function (bundle) {
    return Application.prepareFieldsFromAccount('action_search', 'note', bundle.response.content);
  },
  note_search_pre_search: function (bundle) {
    return Application.pre_search('note', bundle);
  },
  note_search_post_search: function (bundle) {
    return Application.post_search('note', bundle);
  },
  note_search_pre_read_resource: function (bundle) {
    return Application.pre_read_resource('note', bundle);
  },
  note_search_post_read_resource: function (bundle) {
    return Application.post_read_resource('note', bundle);
  }
};

module.exports = Zap;
