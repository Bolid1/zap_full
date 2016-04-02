var
  _ = require('underscore'),
  fs = require('fs'),
  myApp;

myApp = function (config) {
  this._config = config;
};

_.extend(myApp.prototype, {
  _config: null,

  init: function () {
    return this.build();
  },

  build: function () {
    var
      config = this._config;

    fs.readdirSync(config.paths.result).forEach(function (file) {
      var
        part = _.first(file.split('.')),
        result,
        Builder;

      if (!part) {
        return;
      }

      console.log('Build %s', part);

      console.time('Require ' + part);
      try {
        Builder = require('./builders/' + part);
      } catch (ex) {
        console.log('Builder for %s not found', part);
        return;
      } finally {
        console.timeEnd('Require ' + part);
      }

      console.time('Build ' + part);
      result = (new Builder(_.extend({}, config, config[part]))).make();
      console.timeEnd('Build ' + part);

      if (!result) {
        console.log('Empty result in %s', part);
        return;
      } else if (!_.isString(result)) {
        try {
          var tmp;
          tmp = JSON.stringify(result);
          result = tmp;
        } catch (ex) {
          console.log('JSON stringify failed for %s', part, result);
          return;
        }
      }

      console.time('Write ' + part);
      fs.writeFileSync(config.paths.result + '/' + file, result, 'utf8');
      console.timeEnd('Write ' + part);
    });

    return this;
  }
});

module.exports = myApp;
