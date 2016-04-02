var
  Config = require('./config'),
  Application = require('./lib/app');

(new Application(Config)).init();
