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
  }
};

module.exports = utils;
