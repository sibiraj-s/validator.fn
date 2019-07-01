const canValidate = (value) => {
  let validate = true;

  if (value === 'true' || value === 'false') {
    validate = JSON.parse(value);
  }

  return validate;
};

export default canValidate;
