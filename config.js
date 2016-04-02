var
  fs = require('fs'),
  myConfig;

myConfig = {
  paths: {
    root: __dirname,
    result: fs.realpathSync(__dirname + '/result')
  },
  names: {
    contact: {
      many: 'contacts',
      single: 'contact',
      api: 'contacts',
      url: 'contacts',
      id: 1
    },
    company: {
      many: 'companies',
      single: 'company',
      api: 'contacts',
      url: 'company',
      id: 3
    },
    lead: {
      many: 'leads',
      single: 'lead',
      api: 'leads',
      url: 'leads',
      id: 2
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
    important: ['lead_add', 'contact_add', 'contact_update']
  }
};

module.exports = myConfig;
