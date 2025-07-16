import { TranslateClient } from '@aws-sdk/client-translate';
import { fromIni } from '@aws-sdk/credential-providers';
import { config } from 'dotenv';
import assert from 'node:assert';

config();

assert(process.env.AWS_PROFILE_NAME, 'Must specify a profile as AWS_PROFILE_NAME.');
const { AWS_PROFILE_NAME } = process.env;

export const clientParams = {
    region: 'us-east-1',
    credentials: fromIni({
        profile: AWS_PROFILE_NAME,
        filepath: "~/.aws/credentials",
        configFilepath: "~/.aws/config",
    }),
};

// export enum ProductType {
//     RC = 'RC',
//     MINI = 'MINI',
// }

export const ENGLISH_FILENAME = 'en.json';
export const FILE_PATHS = {
    IMPORT: './import',
    EXPORT: './i18n',
    TMP: './tmp',
};

export const client = {
    translate: new TranslateClient(clientParams),
};

/** Language code map from ISO 639-3 -> RFC-5646 codes */
export const LANGUAGE_CODE_MAP = {
    en: 'en',
    ch: 'zh',
    es: 'es',
    fr: 'fr',
    ru: 'ru',
    vi: 'vi',
    ar: 'ar',
    pt: 'pt',
    ht: 'ht',
    sw: 'sw',
    hi: 'hi',
};
// export const LANGUAGE_CODE_MAP = {
//     afr: 'af',
//     amh: 'am',
//     ara: 'ar',
//     aze: 'az',
//     ben: 'bn',
//     bos: 'bs',
//     bul: 'bg',
//     cat: 'ca',
//     ces: 'cs',
//     cym: 'cy',
//     dan: 'da',
//     deu: 'de',
//     ell: 'el',
//     eng: 'en',
//     est: 'et',
//     fas: 'fa',
//     fin: 'fi',
//     fra: 'fr',
//     gle: 'ga',
//     guj: 'gu',
//     hat: 'ht',
//     hau: 'ha',
//     heb: 'he',
//     hin: 'hi',
//     hrv: 'hr',
//     hun: 'hu',
//     hye: 'hy',
//     ind: 'id',
//     isl: 'is',
//     ita: 'it',
//     jpn: 'ja',
//     kan: 'kn',
//     kat: 'ka',
//     kaz: 'kk',
//     kor: 'ko',
//     lav: 'lv',
//     lit: 'lt',
//     mal: 'ml',
//     mar: 'mr',
//     mkd: 'mk',
//     mlt: 'mt',
//     mon: 'mn',
//     msa: 'ms',
//     nld: 'nl',
//     nor: 'no',
//     pan: 'pa',
//     pol: 'pl',
//     por: 'pt',
//     pus: 'ps',
//     ron: 'ro',
//     rus: 'ru',
//     sin: 'si',
//     slk: 'sk',
//     slv: 'sl',
//     som: 'so',
//     spa: 'es',
//     sqi: 'sq',
//     srp: 'sr',
//     swa: 'sw',
//     swe: 'sv',
//     tam: 'ta',
//     tel: 'te',
//     tgl: 'tl',
//     tha: 'th',
//     tur: 'tr',
//     ukr: 'uk',
//     urd: 'ur',
//     uzb: 'uz',
//     vie: 'vi',
// };

