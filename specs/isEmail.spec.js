const validator = require('../index').default;

const VALID_EMAIL = 'johndoe@anonymous.com';
const INVALID_EMAIL = 'johndoe@anonymous@.com';

test(`it should validate '${VALID_EMAIL}' as valid email`, () => {
  const validations = ['isEmail'];
  const errorMessage = validator(VALID_EMAIL, validations);
  expect(errorMessage).toBeNull();
});

test('it should return \'INVLAID_EMAIL\' for an invalid email', () => {
  const validations = ['isEmail'];
  const errorMessage = validator(INVALID_EMAIL, validations);
  expect(errorMessage).toBe('INVALID_EMAIL');
});

test('it should not validate when marked false', () => {
  const validations = ['isEmail:false'];
  const errorMessage = validator(VALID_EMAIL, validations);
  expect(errorMessage).toBeNull();
});
