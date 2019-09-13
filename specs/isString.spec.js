const validator = require('../dist/validator.fn');

test('it should validate string correctly', () => {
  const validations = ['isString'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});

test('it should return \'NOT_A_STRING\' for an invalid string', () => {
  const validations = ['isString'];
  const errorMessage = validator(1, validations);
  expect(errorMessage).toBe('NOT_A_STRING');
});

test('it should not validate when marked false', () => {
  const validations = ['isString:false'];
  const errorMessage = validator(123, validations);
  expect(errorMessage).toBe('');
});