const ExpressError = require('../../utils/ExpressError');

describe('ExpressError', () => {
  test('sets message and statusCode', () => {
    const err = new ExpressError('boom', 418);
    expect(err.message).toBe('boom');
    expect(err.statusCode).toBe(418);
  });
});
