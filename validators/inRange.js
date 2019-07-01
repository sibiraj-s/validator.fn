import _ from 'lodash';

const INVALID_INPUT = 'INVALID_INPUT';
const NOT_IN_RANGE = 'NOT_IN_RANGE';

const isInRange = (value, range) => {
  const _start = range.split('-')[0];
  const _end = range.split('-')[1];

  if (!_start || !_start) {
    console.error('Start and End must be a number. For Example: \'inRange:1-10\'');
    return INVALID_INPUT;
  }

  const start = _.parseInt(_start);
  const end = _.parseInt(_end);

  if (_.isNaN(start) || _.isNaN(end)) {
    console.error('Start and End must be a number. For Example: \'inRange:1-10\'');
    return INVALID_INPUT;
  }

  if (!_.isNumber(value)) {
    console.error('Input must be a number');
    return INVALID_INPUT;
  }

  return _.inRange(value, start, end) ? '' : NOT_IN_RANGE;
};

export default isInRange;
