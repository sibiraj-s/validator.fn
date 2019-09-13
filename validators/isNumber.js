import _ from 'lodash';

import ERROR_MESSAGES from './constants/errorMessages';

const isNumber = (value) => (_.isNumber(value) ? '' : ERROR_MESSAGES.NOT_A_NUMBER);

export default isNumber;
