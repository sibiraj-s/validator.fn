import _ from 'lodash';

import ERROR_MESSAGES from './constants/errorMessages';

const isString = (value) => (_.isString(value) ? '' : ERROR_MESSAGES.NOT_A_STRING);

export default isString;
