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

    _.values(this._config.out_files).forEach(function (file) {
      var
        part = _.first(file.split('.')),
        result,
        tmp,
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

      if (_.isEmpty(result)) {
        console.log('Empty result in %s', part);
        return;
      } else if (!_.isString(result)) {
        try {
          tmp = JSON.stringify(result, null, 2);
          result = tmp;
        } catch (ex) {
          console.log('JSON stringify failed for %s', part, result);
          return;
        }
      }

      result = result + "\n";

      console.time('Write ' + part);
      fs.writeFileSync(config.paths.result + '/' + file, result, 'utf8');
      console.timeEnd('Write ' + part);

      if (config.modules[part]) {
        tmp = ['//noinspection JSUnusedGlobalSymbols'];
        if (config.modules[part].dependencies) {
          tmp.push('var', _.map(config.modules[part].dependencies, function (name, key) {
              return key + ' = require("' + name + '")';
            }).join(",\n") + ';');
        }


        tmp.push(result.replace(config.modules[part].out + ' = ', "//noinspection JSUnusedGlobalSymbols\n" + config.modules[part].out + ' = '), 'module.exports = ' + config.modules[part].out + ';');
        tmp = tmp.join("\n") + "\n";
        console.time('Write ' + part + ' as module');
        fs.writeFileSync(config.paths.tests + '/' + part + '/' + file, tmp, 'utf8');
        console.timeEnd('Write ' + part + ' as module');
      }
    });

    return this;
  }
});

module.exports = myApp;
