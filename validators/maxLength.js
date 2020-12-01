import toString from './utils/toString';

import ERROR_MESSAGES from './constants/errorMessages';

const maxLength = (value, _maxLenght) => {
  if (toString(value).length > _maxLenght) {
    return ERROR_MESSAGES.MAX_LENGTH_EXCEEDED;
  }
  return '';
};

export default maxLength;
