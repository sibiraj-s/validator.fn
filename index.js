import _ from 'lodash';

import parseValidations from './utils/parseValidations';
import canValidate from './utils/canValidate';
import validators from './validators';

const defaultValidations = {};

const validate = (inputVal, _validations) => {
  const userValidations = parseValidations(_validations);

  const validations = _.defaults(userValidations, defaultValidations);

  let error = '';

  _.forIn(validations, (value, key) => {
    const enabled = canValidate(value);
    const option = value;
    const validatorMethod = key;
    const validatorFn = validators[validatorMethod];

    error = enabled ? validatorFn(inputVal, option) : '';

    if (error) {
      return false;
    }

    return true;
  });

  return error;
};

export default validate;
