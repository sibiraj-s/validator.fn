import ERROR_MESSAGES from './constants/errorMessages';

// eslint-disable-next-line
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmail = (value) => (EMAIL_REGEXP.test(value) ? '' : ERROR_MESSAGES.INVALID_EMAIL);

export default isEmail;
