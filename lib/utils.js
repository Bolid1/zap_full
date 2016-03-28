var utils = {
  string: {
    capitalize: function (str) {
      return str.split(' ').map(function (s) {
        return s.substr(0, 1).toUpperCase() + s.substr(1);
      }).join(' ');
    }
  }
};

module.exports = utils;
