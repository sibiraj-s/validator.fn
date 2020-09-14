import _ from 'lodash';

import ERROR_MESSAGES from './constants/errorMessages';

const isInRange = (value, range) => {
  const [_start, _end] = range.split('-');

  const start = _.parseInt(_start);
  const end = _.parseInt(_end);

  if (_.isNaN(start) || _.isNaN(end)) {
    console.error('Start and End must be a number. For Example: \'inRange:1-10\'');
    return ERROR_MESSAGES.INVALID_INPUT;
  }

  if (!_.isNumber(value)) {
    console.error('Input must be a number');
    return ERROR_MESSAGES.INVALID_INPUT;
  }

  return _.inRange(value, start, end) ? '' : ERROR_MESSAGES.NOT_IN_RANGE;
};

export default isInRange;
