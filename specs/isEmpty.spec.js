import { test, expect } from 'vitest';

import validator from '../index';

const INPUT_STRING = 'validator.fn';

test(`it should validate '${INPUT_STRING}'`, () => {
  const validations = ['isRequired'];
  const errorMessage = validator(INPUT_STRING, validations);
  expect(errorMessage).toBeNull();
});

test('it should return \'EMPTY\' when no input is passed', () => {
  const validations = ['isRequired'];
  const errorMessage = validator('', validations);
  expect(errorMessage).toBe('EMPTY');
});

test('it should return \'EMPTY\' when input is \'undefined\'', () => {
  const validations = ['isRequired'];
  const errorMessage = validator(undefined, validations);
  expect(errorMessage).toBe('EMPTY');
});

test('it should return \'EMPTY\' when input is \'null\'', () => {
  const validations = ['isRequired'];
  const errorMessage = validator(null, validations);
  expect(errorMessage).toBe('EMPTY');
});

test('it should return \'EMPTY\' when input is empty array', () => {
  const validations = ['isRequired'];
  const errorMessage = validator([], validations);
  expect(errorMessage).toBe('EMPTY');
});

test('it should return \'EMPTY\' when input is empty object', () => {
  const validations = ['isRequired'];
  const errorMessage = validator({}, validations);
  expect(errorMessage).toBe('EMPTY');
});

test('it should not validate when marked false', () => {
  const validations = ['isRequired:false'];
  const errorMessage = validator(INPUT_STRING, validations);
  expect(errorMessage).toBeNull();
});
