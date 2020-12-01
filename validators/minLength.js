import toString from './utils/toString';

import ERROR_MESSAGES from './constants/errorMessages';

const minLength = (value, _minLength) => {
  if (toString(value).length < _minLength) {
    return ERROR_MESSAGES.MIN_LENGTH_REQUIRED;
  }

  return '';
};

export default minLength;
