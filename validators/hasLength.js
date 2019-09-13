import _ from 'lodash';

import ERROR_MESSAGES from './constants/errorMessages';

const hasLength = (value, _length) => {
  const length = _.toNumber(_length);

  if (_.isNaN((length))) {
    console.error('Length must be a number. For Example: \'hasLength:10\'');
    return ERROR_MESSAGES.INVALID_INPUT;
  }

  return _.toString(value).length === _.toNumber(length) ? '' : ERROR_MESSAGES.INVALID_LENGTH;
};

export default hasLength;
