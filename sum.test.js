// sum.test.js
const sum = require('./math');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
