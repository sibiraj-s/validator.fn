const { test, expect } = require('@jest/globals');

const validator = require('../index').default;

test('it should validate maxlength of a string correctly', () => {
  const validations = ['maxLength:20'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBeNull();
});

test('it should return \'MAX_LENGTH_EXCEEDED\' if string length exceeds given length', () => {
  const validations = ['maxLength:1'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('MAX_LENGTH_EXCEEDED');
});

test('it should not validate when marked false', () => {
  const validations = ['maxLength:false'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBeNull();
});
