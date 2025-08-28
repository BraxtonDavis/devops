var main = require('/index.js');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
}); 

describe('Negative fibonnacci value', function() {
  it('should return undefined for a negative number', function() {
    assert.strictEqual(main.fibonacci(undefined));
  })
})