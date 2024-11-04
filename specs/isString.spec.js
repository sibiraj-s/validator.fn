import { test, expect } from 'vitest';

import validator from '../index';

test('it should validate without errors when no options provided', () => {
  const errorMessage = validator('validator.fn');
  expect(errorMessage).toBeNull();
});

test('it should validate string correctly', () => {
  const validations = ['isString'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBeNull();
});

test('it should return \'NOT_A_STRING\' for an invalid string', () => {
  const validations = ['isString'];
  const errorMessage = validator(1, validations);
  expect(errorMessage).toBe('NOT_A_STRING');
});

test('it should not validate when marked false', () => {
  const validations = ['isString:false'];
  const errorMessage = validator(123, validations);
  expect(errorMessage).toBeNull();
});
