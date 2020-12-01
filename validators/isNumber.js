import ERROR_MESSAGES from './constants/errorMessages';

const isNumber = (value) => {
  return typeof value === 'number' && !isNaN(value) ? '' : ERROR_MESSAGES.NOT_A_NUMBER;
};

export default isNumber;
