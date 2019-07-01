import _ from 'lodash';

const MAX_LENGTH_EXCEEDED = 'MAX_LENGTH_EXCEEDED';

const maxLength = (value, _maxLenght) => (_.toString(value).length > _maxLenght ? MAX_LENGTH_EXCEEDED : '');

export default maxLength;
