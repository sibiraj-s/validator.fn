const validator = require('../index').default;

test('it should validate a string to have exact length', () => {
  const validations = ['hasLength:12'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});

test('it should return \'INVALID_LENGTH\' if string length doesn`t match', () => {
  const validations = ['hasLength:10'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('INVALID_LENGTH');
});

test('it should not validate when marked false', () => {
  const validations = ['hasLength:false'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});

test('it should return `INVALID_INPUT` when input is not a number', () => {
  const validations = ['hasLength:w'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('INVALID_INPUT');
});
