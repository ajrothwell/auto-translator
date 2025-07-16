import fs from 'fs';
import path from 'path';
import assert from 'assert';

const collectMissingKeys = (expected: object, actual: object, pathPrefix: string = ''): string[] => {
    const isObject = (obj: any) => obj !== null && typeof obj === 'object';

    return Object.keys(expected).reduce<string[]>((missingKeys, key) => {
        const fullPath = pathPrefix ? `${pathPrefix}.${key}` : key;

        if (!(key in actual)) {
            return [...missingKeys, fullPath];
        }

        if (isObject(expected[key])) {
            return [...missingKeys, ...collectMissingKeys(expected[key], actual[key], fullPath)];
        }

        return missingKeys;
    }, []);
};

const validateFile = (englishFile: string, nonEnglishFile: string) => {
    console.log(`Validating ${nonEnglishFile}...`);
    const eng = JSON.parse(fs.readFileSync(englishFile, 'utf-8'));
    const nonEng = JSON.parse(fs.readFileSync(nonEnglishFile, 'utf-8'));

    const missingKeys = collectMissingKeys(eng, nonEng);

    if (missingKeys.length > 0) {
        console.log(`Missing keys in ${nonEnglishFile}:`);
        missingKeys.forEach(key => console.warn(`- ${key}`));
        return false;
    } else {
        console.log(`No missing keys in ${nonEnglishFile}`);
        return true;
    }
};

/**
 * Validates the locale files have same structure of the english locale file
 */
const validator = () => {
    // read all local directories, and validate files that are not en.json
    const dirs = fs.readdirSync('.').filter((f) => fs.statSync(f).isDirectory());

    for (const dir of dirs) {
        const files = fs.readdirSync(dir);

        if (!files.includes('en.json')) continue;

        const nonEnglishFiles = files.filter((f) => f !== 'en.json' && f.endsWith('.js'));
        const englishFile = path.join(dir, 'en.json');

        const invalidFiles = nonEnglishFiles.filter((file) => !validateFile(englishFile, path.join(dir, file)));

        assert(invalidFiles.length === 0, `Validation failed for ${invalidFiles.join(', ')}`);
    }
}

validator();
