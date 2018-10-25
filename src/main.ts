const countries = require('./countries.json');

const args = process.argv;
const language = args[2];

interface ITranslationProperties {
    official: string;
    common: string;
}

interface ITranslation {
    [name: string]: ITranslationProperties;
}

interface ICountry {
    translations: ITranslation;
}

export const translateCountries = (countries: ICountry[] = [], language: string): ITranslation[] => {
    if (!language) {
        throw new Error('Language key is requred');
    }

    return countries
        .filter(country => country.translations && country.translations[language])
        .map(country => country.translations);
}

translateCountries(countries, language).forEach(translation => console.log(translation));

