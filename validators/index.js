import isEmpty from './isEmpty';
import isString from './isString';
import isNumber from './isNumber';
import isEmail from './isEmail';
import maxLength from './maxLength';
import minLength from './minLength';
import inRange from './inRange';
import hasLength from './hasLength';
import hasPattern from './hasPattern';

const validators = {
  isRequired: isEmpty,
  isString,
  isNumber,
  isEmail,
  maxLength,
  minLength,
  inRange,
  hasLength,
  hasPattern,
};

export default validators;
