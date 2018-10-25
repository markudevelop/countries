"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var chai_1 = require("chai");
require("mocha");
var mockedCountry = {
    "name": {
        "common": "Austria",
        "official": "Republic of Austria",
        "native": {
            "bar": {
                "official": "Republik Österreich",
                "common": "Österreich"
            }
        }
    },
    "tld": [".at"],
    "cca2": "AT",
    "ccn3": "040",
    "cca3": "AUT",
    "cioc": "AUT",
    "independent": true,
    "status": "officially-assigned",
    "currency": ["EUR"],
    "callingCode": ["43"],
    "capital": ["Vienna"],
    "altSpellings": ["AT", "Osterreich", "Oesterreich"],
    "region": "Europe",
    "subregion": "Western Europe",
    "languages": {
        "bar": "Austro-Bavarian German"
    },
    "translations": {
        "cym": { "official": "Republic of Austria", "common": "Awstria" },
        "deu": { "official": "Republik Österreich", "common": "Österreich" },
        "fra": { "official": "République d'Autriche", "common": "Autriche" },
        "hrv": { "official": "Republika Austrija", "common": "Austrija" },
        "ita": { "official": "Repubblica d'Austria", "common": "Austria" },
        "jpn": { "official": "オーストリア共和国", "common": "オーストリア" },
        "nld": { "official": "Republiek Oostenrijk", "common": "Oostenrijk" },
        "por": { "official": "República da Áustria", "common": "Áustria" },
        "rus": { "official": "Австрийская Республика", "common": "Австрия" },
        "spa": { "official": "República de Austria", "common": "Austria" }
    },
    "latlng": [47.33333333, 13.33333333],
    "demonym": "Austrian",
    "landlocked": true,
    "borders": ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
    "area": 83871,
    "flag": "\ud83c\udde6\ud83c\uddf9"
};
describe('Print translated countries', function () {
    it('should print country translation', function () {
        var result = main_1.translateCountries([mockedCountry], 'cym');
        chai_1.expect(result[0]).to.deep.include({ cym: mockedCountry.translations.cym });
    });
    it('should return translated country', function () {
        var result = main_1.translateCountries([mockedCountry], 'cym');
        chai_1.expect(result[0]).to.deep.equal({ cym: mockedCountry.translations.cym });
    });
    it('should throw if no language key', function () {
        var translate = function () { return main_1.translateCountries([mockedCountry], null); };
        chai_1.expect(translate).to.throw();
    });
    it('should print successfully with missing translation key', function () {
        var result = main_1.translateCountries([mockedCountry], 'NONEXISTING');
        chai_1.expect(result).to.be.an('array').that.is.empty;
    });
    it('should return translated results as an array', function () {
        var result = main_1.translateCountries([mockedCountry], 'cym');
        chai_1.expect(result).to.be.an('array').to.have.length.of.at.most(1);
    });
});
