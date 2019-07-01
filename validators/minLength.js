import _ from 'lodash';

const MIN_LENGTH_REQUIRED = 'MIN_LENGTH_REQUIRED';

const maxLength = (value, _minLength) => (_.toString(value).length < _minLength ? MIN_LENGTH_REQUIRED : '');

export default maxLength;
