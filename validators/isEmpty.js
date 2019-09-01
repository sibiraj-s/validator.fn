import _ from 'lodash';

const EMPTY = 'EMPTY';

const isEmpty = (value) => (_.isEmpty(String(value)) ? EMPTY : '');

export default isEmpty;
