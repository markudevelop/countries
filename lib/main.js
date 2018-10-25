"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries = require('./countries.json');
var args = process.argv;
var language = args[2];
exports.translateCountries = function (countries, language) {
    if (countries === void 0) { countries = []; }
    if (!language) {
        throw new Error('Language key is requred');
    }
    return countries
        .filter(function (country) { return country.translations && country.translations[language]; })
        .map(function (country) { return country.translations; });
};
exports.translateCountries(countries, language).forEach(function (translation) { return console.log(translation); });
