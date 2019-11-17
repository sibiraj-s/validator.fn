const validator = require('../index').default;

const INPUT_STRING = 'validator.fn';

test(`it should validate '${INPUT_STRING}'`, () => {
  const validations = ['isRequired'];
  const errorMessage = validator(INPUT_STRING, validations);
  expect(errorMessage).toBe('');
});

test('it should return \'EMPTY\' when no input is passed', () => {
  const validations = ['isRequired'];
  const errorMessage = validator('', validations);
  expect(errorMessage).toBe('EMPTY');
});

test('it should not validate when marked false', () => {
  const validations = ['isRequired:false'];
  const errorMessage = validator(INPUT_STRING, validations);
  expect(errorMessage).toBe('');
});
