import _ from 'lodash';

import ERROR_MESSAGES from './constants/errorMessages';

const isEmpty = (value) => (_.isEmpty(String(value)) ? ERROR_MESSAGES.EMPTY : '');

export default isEmpty;
