const NO_PATTERN_MATCH = 'NO_PATTERN_MATCH';

const hasPattern = (value, pattern) => {
  const regExp = new RegExp(pattern);
  return regExp.test(value) ? '' : NO_PATTERN_MATCH;
};

export default hasPattern;
