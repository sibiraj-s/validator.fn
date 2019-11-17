const validator = require('../index').default;

test('it should validate a number correctly to be in given range', () => {
  const validations = ['inRange:1-10'];
  const errorMessage = validator(5, validations);
  expect(errorMessage).toBe('');
});

test('it should return \'NOT_IN_RANGE\' if input is not in specified range', () => {
  const validations = ['inRange:1-10'];
  const errorMessage = validator(15, validations);
  expect(errorMessage).toBe('NOT_IN_RANGE');
});

test('it should return \'INVALID_INPUT\' if input is not a number', () => {
  const validations = ['inRange:1-10'];
  const errorMessage = validator('15', validations);
  expect(errorMessage).toBe('INVALID_INPUT');
});

test('it should return \'INVALID_INPUT\' for an invalid range', () => {
  const validations = ['inRange:1-'];
  const errorMessage = validator(15, validations);
  expect(errorMessage).toBe('INVALID_INPUT');
});

test('it should return \'INVALID_INPUT\' for an invalid range', () => {
  const validations = ['inRange:f-10'];
  const errorMessage = validator(15, validations);
  expect(errorMessage).toBe('INVALID_INPUT');
});

test('it should not validate when marked false', () => {
  const validations = ['inRange:false'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});
