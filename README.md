# chance-class-name [![Build Status](https://travis-ci.org/manovotny/chance-class-name.svg?branch=master)](https://travis-ci.org/manovotny/chance-class-name)

> A [Chance.js mixin](http://chancejs.com/#mixin) to generate class names.

Class names are generated according the [W3C CSS spec](https://stackoverflow.com/a/449000).

## Install

### NPM

```
$ npm i chance-class-name
```

### Yarn

```
$ yarn add chance-class-name
```

## Usage

```js
import Chance from 'chance';
import className from 'chance-class-name';

const chance = new Chance();

chance.mixin({
    className
});

chance.className();
```

By default, `chance-class-name` will return a randomly generated class name.

Class names will be between 1 and 25 characters long.

Example: `M-oYLdbPVMpbhjGrsLH`

## License

MIT © [Michael Novotny](http://manovotny.com)
