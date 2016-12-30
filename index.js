'use strict';
const life = require('./life.json');
const countries = require('country-list')();

module.exports = (input) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	const name = countries.getName(input) || input;

	return life.filter(data => data.country.toUpperCase() === name.toUpperCase());
};
