
import { translateCountries } from './main';
import { expect } from 'chai';
import 'mocha';

const mockedCountry = {
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
		"cym": {"official": "Republic of Austria", "common": "Awstria"},
		"deu": {"official": "Republik Österreich", "common": "Österreich"},
		"fra": {"official": "République d'Autriche", "common": "Autriche"},
		"hrv": {"official": "Republika Austrija", "common": "Austrija"},
		"ita": {"official": "Repubblica d'Austria", "common": "Austria"},
		"jpn": {"official": "オーストリア共和国", "common": "オーストリア"},
		"nld": {"official": "Republiek Oostenrijk", "common": "Oostenrijk"},
		"por": {"official": "República da Áustria", "common": "Áustria"},
		"rus": {"official": "Австрийская Республика", "common": "Австрия"},
		"spa": {"official": "República de Austria", "common": "Austria"}
	},
	"latlng": [47.33333333, 13.33333333],
	"demonym": "Austrian",
	"landlocked": true,
	"borders": ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
	"area": 83871,
	"flag": "\ud83c\udde6\ud83c\uddf9"
};

describe('Print translated countries', () => {

  it('should return translated country', () => {
    const result = translateCountries([mockedCountry], 'cym');
    expect(result[0]).to.deep.include({ cym: mockedCountry.translations.cym });
  });

  it('should throw if no language key', () => {
    const translate = () => translateCountries([mockedCountry], null as any);
    expect(translate).to.throw();
  });

  it('should print successfully with missing translation key', () => {
    const result = translateCountries([mockedCountry], 'NONEXISTING');
    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return translated results as an array', () => {
    const result = translateCountries([mockedCountry], 'cym');
    expect(result).to.be.an('array').to.have.length.of.at.most(1);
  });

});
