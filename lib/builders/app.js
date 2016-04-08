var
  _ = require('underscore'),
  fs = require('fs'),
  libs_dir = __dirname + '/app/sources/',
  ZapBuilder = require('./app/zap_builder'),
  utils = require('./../utils'),
  AppBuilder;

AppBuilder = function (config) {
  this._config = config;
};

_.extend(AppBuilder.prototype, {
  _config: null,

  make: function () {
    var
      config = this._config,
      out = [];
    ['searches'].forEach(function (config_name) {
      var data = fs.readFileSync(config.paths.result + '/' + config.out_files[config_name], 'utf8');
      out.push([
        'var conf',
        utils.string.capitalize(config_name),
        ' = ',
        data.trim(),
        ';'
      ].join(''));
    });

    fs.readdirSync(libs_dir).forEach(function (lib_name) {
      out.push(fs.readFileSync(libs_dir + lib_name, 'utf8'));
    });

    out.push(ZapBuilder.make());

    return ['"use strict";'].concat(out).join("\n\n");
  }
});

module.exports = AppBuilder;
