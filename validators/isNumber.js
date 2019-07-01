import _ from 'lodash';

const NOT_A_NUMBER = 'NOT_A_NUMBER';

const isNumber = value => (_.isNumber(value) ? '' : NOT_A_NUMBER);

export default isNumber;
