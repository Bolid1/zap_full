var
  fs = require('fs'),
  myConfig;

myConfig = {
  paths: {
    root: __dirname,
    result: fs.realpathSync(__dirname + '/result')
  }
};

module.exports = myConfig;
