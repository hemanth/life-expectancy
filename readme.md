# life-expectancy [![Build Status](https://travis-ci.org/hemanth/life-expectancy.svg?branch=master)](https://travis-ci.org/hemanth/life-expectancy)

> Life expectancy of humans across the global.


## Install

```
$ npm install --save life-expectancy
```


## Usage

```js
const lifeExpectancy = require('life-expectancy');

lifeExpectancy('India');
/*
[ { both: 68.3,
    country: 'India',
    female: 69.9,
    male: 66.9,
    rank: 125 } ]
*/

lifeExpectancy('in');
/*
[ { both: 68.3,
    country: 'India',
    female: 69.9,
    male: 66.9,
    rank: 125 } ]
*/


lifeExpectancy('Sao Tome and Principe');
/*
[ { both: 67.5,
    country: 'Sao Tome and Principe',
    female: 69.4,
    male: 65.6,
    rank: 127 } ]
*/
```


## API

### lifeExpectancy(input)

#### input

Type: `string`

Country code or Country name.

## License

MIT © [Hemanth.HM](https://h3manth.com)
