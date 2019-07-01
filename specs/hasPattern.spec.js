const validator = require('../dist/validator.fn');

test('it should validate a string with given pattern', () => {
  const validations = ['hasPattern:[A-Za-z]{3}'];
  const errorMessage = validator('USA', validations);
  expect(errorMessage).toBe('');
});

test('it should return \'NO_PATTERN_MATCH\' if string length doesn`t match given pattern', () => {
  const validations = ['hasPattern:[A-Za-z]{3}'];
  const errorMessage = validator('US', validations);
  expect(errorMessage).toBe('NO_PATTERN_MATCH');
});

test('it should not validate when marked false', () => {
  const validations = ['hasPattern:false'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});
