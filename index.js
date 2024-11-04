import parseValidations from './utils/parseValidations';
import canValidate from './utils/canValidate';
import validators from './validators';

const defaultValidations = {};

const validate = (inputVal, _validations) => {
  const userValidations = parseValidations(_validations);

  const validations = Object.assign(userValidations, defaultValidations);

  for (const key in validations) {
    if (Object.hasOwn(validations, key)) {
      const value = validations[key];

      const enabled = canValidate(value);
      const option = value;
      const validatorMethod = key;
      const validatorFn = validators[validatorMethod];

      const error = enabled ? validatorFn(inputVal, option) : '';

      if (error) {
        return error;
      }
    }
  }

  return null;
};

export default validate;
