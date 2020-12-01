import ERROR_MESSAGES from './constants/errorMessages';

const isEmpty = (value) => {
  let empty = true;

  if (value === null || value === undefined) {
    empty = true;
  } else if (typeof value === 'string') {
    empty = value.length === 0;
  } else if (Array.isArray(value)) {
    empty = value.length === 0;
  } else if (typeof value === 'object') {
    empty = Object.keys(value).length === 0;
  }

  return empty ? ERROR_MESSAGES.EMPTY : '';
};

export default isEmpty;
