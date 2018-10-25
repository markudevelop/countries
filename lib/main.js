"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countries = require('./countries.json');
var args = process.argv;
var language = args[2];
exports.printTranslatedCountries = function (countries, language) {
    if (countries === void 0) { countries = []; }
    if (!language) {
        throw new Error('Language key is requred');
    }
    var translatedCountries = [];
    countries.forEach(function (country) {
        var _a;
        var countryTranslated = country.translations && country.translations[language];
        if (countryTranslated) {
            var official = country.translations[language].official;
            var common = country.translations[language].common;
            translatedCountries.push((_a = {}, _a[language] = { official: official, common: common }, _a));
            console.log(official);
        }
    });
    return translatedCountries;
};
exports.printTranslatedCountries(countries, language);
