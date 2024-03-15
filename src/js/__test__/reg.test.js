import Validator from "../reg";

test.each([
  ['Iva4n', true],
  ['-Iva4n', false],
  ['Iva4n_', false],
  ['Iva*n', false],
  ['4Ivan', false],
  ['Ivan4', false],
  ['Iva4444n', false],
])('testing username %s', (username, expected) => {
  const result = new Validator;
  expect(result.validateUsername(username)).toBe(expected);
});