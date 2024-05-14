import catalan from './ca.json';
import english from './en.json';
import spanish from './es.json';

const LANGUAGES = { 
    CATALAN: 'ca',
    ENGLISH: 'en',
    SPANISH: 'es'

}

export const getI18n = ({currentLocale = 'es'}: {currentLocale : string | undefined}) => { 
    switch (currentLocale) { 
        case LANGUAGES.CATALAN:
            return catalan;
        case LANGUAGES.ENGLISH:
            return english;
        case LANGUAGES.SPANISH:
            return spanish;
        default:
            return spanish;
    }
}