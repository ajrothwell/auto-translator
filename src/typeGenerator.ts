import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype-core';
import * as fs from 'fs';
import path from 'path'
import assert from 'assert';

const generateTypeFile = async (dir: string) => {
    const jsonString = fs.readFileSync(path.join(dir, 'en.json'), 'utf-8');

    const jsonInput = jsonInputForTargetLanguage('typescript');
    await jsonInput.addSource({
        name: `${dir}LanguageFile`,
        samples: [jsonString],
    });

    const inputData = new InputData();
    inputData.addInput(jsonInput);

    const result = await quicktype({
        inputData,
        lang: 'typescript',
        rendererOptions: {
            'just-types': 'true',
        }
    });

    fs.writeFileSync(path.join(dir, 'index.d.ts'), result.lines.join('\n'));
}

async function generateTypes() {
    // read all local directories, and generate types for all json files which are en.json
    const dirs = fs.readdirSync('.').filter((f) => fs.statSync(f).isDirectory());

    for (const dir of dirs) {
        const files = fs.readdirSync(dir);

        if (!files.includes('en.json')) continue;

        await generateTypeFile(dir);
        console.log(`Types generated successfully at ${dir}`);
    }
}

generateTypes();
