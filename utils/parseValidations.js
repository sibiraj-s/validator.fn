// parses user validations to object
// for example:
// ['isRequired'] ===> {isRequired: true}
// ['isRequired', 'maxLength:100'] ===> {isRequired: true, maxLength: 100}
// ['isRequired:false', 'maxLength:100'] ===> {isRequired: false, maxLength: 100}
// ['range:1-10', 'maxLength:100'] ===> {range: '1-10', maxLength: 100}
const parseValidations = (userValidations = []) => {
  const validations = {};

  userValidations.forEach((item) => {
    const type = item.split(':')[0];
    const value = item.split(':')[1] || true;
    validations[type] = value;
  });

  return validations;
};

export default parseValidations;
