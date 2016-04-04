var
  utils = require('./../../lib/utils');

require('chai').should();

describe('lib/utils', function () {
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
  describe('object', function () {
    describe('#clone', function () {
      it('Must do it job', function () {
        utils.objects.clone('abc').should.equal('abc');
        utils.objects.clone({foo: {foo: 'bar'}}).should.deep.equal({foo: {foo: 'bar'}});
      });
      it('Must clone without links', function () {
        var
          test = {foo: {foo: 'bar'}},
          result = utils.objects.clone(test);

        result.should.deep.equal(test);
        test.foo.foo = 'foo';
        result.should.deep.not.equal(test);
        test.foo = {bar: 'foo'};
        result.should.deep.not.equal(test);
      });
    });
    describe('#filter', function () {
      it('Must do it job', function () {
        var object;
        object = {foo: 'bar', bar: 'foo'};

        utils.objects.filter(object, function (value, index) {
          return index === 'foo';
        }).should.deep.equal({foo: 'bar'});
      });
    });
  });
});
