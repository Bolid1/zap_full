var
  _ = require('underscore'),
  utils = require('./lib/utils.js'),
  fs = require('fs'),
  myConfig;

myConfig = {
  paths: {
    root: __dirname,
    result: fs.realpathSync(__dirname + '/result')
  },
  entities: {
    contact: {
      many: 'contacts',
      single: 'contact',
      api: 'contacts',
      url: 'contacts',
      id: 1
    },
    lead: {
      many: 'leads',
      single: 'lead',
      api: 'leads',
      url: 'leads',
      id: 2
    },
    company: {
      many: 'companies',
      single: 'company',
      api: 'contacts',
      url: 'company',
      id: 3
    },
    task: {
      many: 'tasks',
      single: 'task',
      api: 'tasks',
      url: 'tasks',
      id: 4
    },
    note: {
      many: 'notes',
      single: 'note',
      api: 'notes',
      url: 'notes',
      id: 5
    }
  },
  actions: {
    entities: ['contact', 'lead', 'company', 'task', 'note'],
    actions: {
      add: {
        names: {
          label: 'Create %s',
          help_text: 'Creates a new %s'
        }
      },
      update: {
        names: {
          label: 'Update %s',
          help_text: 'Updates a %s'
        }
      }
    },
    important: ['lead_add', 'lead_update', 'contact_add']
  },
  searches: {
    entities: ['contact', 'lead', 'company', 'task', 'note'],
    actions: {
      search: {
        names: {
          label: 'Find %s',
          help_text: 'Finds an existing %s',
          pair_label: 'Find or Create %s'
        }
      }
    },
    important: ['contact_search', 'lead_search', 'company_search']
  },
  triggers: {
    entities: ['contact', 'lead', 'company'],
    actions: {
      add: {
        names: {
          label: 'New %s',
          help_text: 'Triggers when a new %s is created'
        }
      },
      delete: {
        names: {
          label: '%s Deleted',
          help_text: 'Triggers when %s is deleted'
        }
      },
      update: {
        names: {
          label: '%s Updated',
          help_text: 'Triggers when %s is updated'
        }
      },
      restore: {
        names: {
          label: '%s Restored',
          help_text: 'Triggers when %s is restored'
        }
      },
      status: {
        only: ['lead'],
        names: {
          label: '%s Status Changed',
          help_text: 'Triggers when %s status is changed'
        }
      },
      responsible: {
        only: ['lead'],
        names: {
          label: '%s Responsible User Changed',
          help_text: 'Triggers when %s responsible user is changed'
        }
      }
    },
    important: ['add_lead', 'update_lead', 'status_lead']
  }
};

['actions', 'searches', 'triggers'].forEach(function (key) {
  myConfig[key].entities = utils.objects.filter(myConfig.entities, function (value, index) {
    return _.indexOf(myConfig[key].entities, index) !== -1;
  });
});

module.exports = myConfig;
