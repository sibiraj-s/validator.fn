# validator.fn [![Build Status](https://travis-ci.com/sibiraj-s/validator.fn.svg?branch=master)](https://travis-ci.com/sibiraj-s/validator.fn)

> A simple function to aid form validations 

## Getting Started

### Installation

Install via Package managers such as [npm][npm] or [yarn][yarn]

```bash
npm install validator.fn --save
# or
yarn add validator.fn
```

or use cdn

**Minified:**

```bash
//cdn.jsdelivr.net/npm/validator.fn@latest/validator.fn.min.js
```

**Pretty Printed:**

```bash
//cdn.jsdelivr.net/npm/validator.fn@latest/validator.fn.js
```

**Note:** [Lodash v4.x](https://lodash.com/) is a peerDependency

### Usage

This library is compiled to [UMD][umd] format, you should be able to use it in both `Node.js` and `browser`.

```js
import validate from 'validator.fn';

const err = validate('hey', ['isString', 'minLength:3', 'hasLength:3']) // is valid and returns ''

const err = validate(3, ['isNumber', 'inRange:1-10'])
```

#### Supported Validations

- isString
- isNumber
- iSEmail
- isRequired
- minLength
- maxLength
- hasLength
- inRange
- hasPattern

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[umd]: https://github.com/umdjs/umd