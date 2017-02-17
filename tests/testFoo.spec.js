/* global describe it */

const assert = require('chai').assert;

describe('A generic test suide', () => {
  it('Should do something better than this', () => {
    const expectation = {
      foo: 'bar',
    };

    const reality = {
      foo: 'bar',
    };

    assert.equal(true, true);
    assert.deepEqual(expectation, reality);
  });
});
