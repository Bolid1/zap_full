var
  _ = require('underscore'),
  utils;

utils = {
  string: {
    capitalize: function (str) {
      return str.split(' ').map(function (s) {
        return s.substr(0, 1).toUpperCase() + s.substr(1);
      }).join(' ');
    }
  },

  objects: {
    clone: function (obj) {
      return JSON.parse(JSON.stringify(obj));
    },

    filter: function (obj, predicate, context) {
      var results = {};
      predicate = _.iteratee(predicate, context);
      _.each(obj, function (value, index, list) {
        if (predicate(value, index, list)) {
          results[index] = value;
        }
      });

      return results;
    }
  },

  functions: {
    extend: function(protoProps, staticProps) {
      var parent = this;
      var child;

      // The constructor function for the new subclass is either defined by you
      // (the "constructor" property in your `extend` definition), or defaulted
      // by us to simply call the parent constructor.
      if (protoProps && _.has(protoProps, 'constructor')) {
        child = protoProps.constructor;
      } else {
        child = function(){ return parent.apply(this, arguments); };
      }

      // Add static properties to the constructor function, if supplied.
      _.extend(child, parent, staticProps);

      // Set the prototype chain to inherit from `parent`, without calling
      // `parent`'s constructor function and add the prototype properties.
      child.prototype = _.create(parent.prototype, protoProps);
      child.prototype.constructor = child;

      // Set a convenience property in case the parent's prototype is needed
      // later.
      child.__super__ = parent.prototype;

      return child;
    }
  }
};

module.exports = utils;
