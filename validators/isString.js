import _ from 'lodash';

const NOT_A_STRING = 'NOT_A_STRING';

const isString = value => (_.isString(value) ? '' : NOT_A_STRING);

export default isString;
