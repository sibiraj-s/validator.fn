import ERROR_MESSAGES from './constants/errorMessages';

const isInRange = (value, range) => {
  const [_start, _end] = range.split('-');

  const min = parseInt(_start, 10);
  const max = parseInt(_end, 10);

  if (isNaN(min) || isNaN(max)) {
    console.error('Min and Max must be a number. For Example: \'inRange:1-10\'');
    return ERROR_MESSAGES.INVALID_INPUT;
  }

  if (typeof value !== 'number') {
    console.error('Input must be a number');
    return ERROR_MESSAGES.INVALID_INPUT;
  }

  return value >= min && value <= max ? '' : ERROR_MESSAGES.NOT_IN_RANGE;
};

export default isInRange;
