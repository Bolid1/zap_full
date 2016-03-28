var
  should = require('chai').should(),
  utils = require('./../../lib/utils');

describe('libs', function () {
  describe('string', function () {
    describe('#capitalize', function () {
      it('Must do it job', function () {
        utils.string.capitalize('abc').should.equal('Abc');
      });
      it('Must do it job with spaces', function () {
        utils.string.capitalize('abc def').should.equal('Abc Def');
      });
    });
  });
});
