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

export const printTranslatedCountries = (countries: ICountry[] = [], language: string): ITranslation[] => {
    if (!language) {
        throw new Error('Language key is requred');
    }

    const translatedCountries: ITranslation[] = [];

    countries.forEach((country: ICountry) => {
        const countryTranslated = country.translations && country.translations[language];

        if (countryTranslated) {
            const official = country.translations[language].official;
            const common = country.translations[language].common;

            translatedCountries.push({ [language]: { official, common } });
            console.log(official);
        }
    });

    return translatedCountries;
}


printTranslatedCountries(countries, language);
