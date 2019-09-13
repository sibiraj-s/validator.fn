import ERROR_MESSAGES from './constants/errorMessages';

const hasPattern = (value, pattern) => {
  const regExp = new RegExp(pattern);
  return regExp.test(value) ? '' : ERROR_MESSAGES.NO_PATTERN_MATCH;
};

export default hasPattern;
