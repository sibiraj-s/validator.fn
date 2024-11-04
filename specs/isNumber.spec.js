import { test, expect } from 'vitest';

import validator from '../index';

test('it should validate number correctly', () => {
  const validations = ['isNumber'];
  const errorMessage = validator(1, validations);
  expect(errorMessage).toBeNull();
});

test('it should return \'NOT_A_NUMBER\' for an invalid number', () => {
  const validations = ['isNumber'];
  const errorMessage = validator('1', validations);
  expect(errorMessage).toBe('NOT_A_NUMBER');
});

test('it should not validate when marked false', () => {
  const validations = ['isNumber:false'];
  const errorMessage = validator('123', validations);
  expect(errorMessage).toBeNull();
});
