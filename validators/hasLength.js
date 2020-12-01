import ERROR_MESSAGES from './constants/errorMessages';

const hasLength = (value, _length) => {
  const length = parseInt(_length, 10);

  if (isNaN(length)) {
    console.error('Length must be a number. For Example: \'hasLength:10\'');
    return ERROR_MESSAGES.INVALID_INPUT;
  }

  return value.length === parseInt(length, 10) ? '' : ERROR_MESSAGES.INVALID_LENGTH;
};

export default hasLength;
