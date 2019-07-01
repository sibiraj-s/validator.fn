import _ from 'lodash';

const INVALID_INPUT = 'INVALID_INPUT';
const INVALID_LENGTH = 'INVALID_LENGTH';

const hasLength = (value, _length) => {
  const length = _.toNumber(_length);

  if (_.isNaN((length))) {
    console.error('Length must be a number. For Example: \'hasLength:10\'');
    return INVALID_INPUT;
  }

  return _.toString(value).length === _.toNumber(length) ? '' : INVALID_LENGTH;
};

export default hasLength;
