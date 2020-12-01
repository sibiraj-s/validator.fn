import ERROR_MESSAGES from './constants/errorMessages';

const isString = (value) => {
  return typeof value === 'string' ? '' : ERROR_MESSAGES.NOT_A_STRING;
};

export default isString;
