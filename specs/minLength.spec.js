const validator = require('../index').default;

test('it should validate minimum length of a string correctly', () => {
  const validations = ['minLength:12'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});

test('it should return \'MIN_LENGTH_REQUIRED\' if string has length less than given length', () => {
  const validations = ['minLength:25'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('MIN_LENGTH_REQUIRED');
});

test('it should not validate when marked false', () => {
  const validations = ['minLength:false'];
  const errorMessage = validator('validator.fn', validations);
  expect(errorMessage).toBe('');
});
