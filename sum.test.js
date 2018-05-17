const stateOfCurrent = require('./sum');

test('compare current/previous', () => {
  expect(stateOfCurrent(2000, 2000)).toBe(0);
});
