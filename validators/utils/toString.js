const toString = (value) => {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'number' && isNaN(value)) {
    return '';
  }

  if (typeof value === 'string') {
    return value;
  }

  return String(value);
};

export default toString;
