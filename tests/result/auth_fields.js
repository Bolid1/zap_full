var
  auth_fields = require('./../../result/auth_fields.json');

require('chai').should();

describe('result/auth_fields', function () {
  it('Must be equal', function () {
    auth_fields.should.deep.equal({
      login: {
        label: 'Email',
        required: true,
        help_text: null,
        placeholder: 'mike@gmail.com',
        default: null,
        choices: null,
        sort: null,
        type: 'Unicode',
        input_format: null
      },
      api_key: {
        label: 'API KEY',
        required: true,
        help_text: "Your api key. To obtain it go to your account, click on top left corner of page and open \"Profile settings\"\nYou will find api key just above the \"Save\" button.",
        placeholder: null,
        default: null,
        choices: null,
        sort: null,
        type: 'Password',
        input_format: null
      },
      account: {
        label: 'Subdomain',
        required: true,
        help_text: null,
        placeholder: null,
        default: null,
        choices: null,
        sort: null,
        type: 'Unicode',
        input_format: 'https://,{{input}},.amocrm.(com|ru)'
      },
      top_level_domain: {
        label: 'Top Level Domain',
        required: true,
        help_text: 'Select top level domain, which you use to work with amoCRM',
        placeholder: null,
        default: 'com',
        choices: 'ru|ru,com|com',
        sort: null,
        type: 'Unicode',
        input_format: 'https://example.amocrm.,{{input}},/'
      }
    });
  });
});
