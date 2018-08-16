import * as fs from 'fs';
import { compile } from 'json-schema-to-typescript';
import { componentsDefinitionSchema_v1_0_x } from './lib/components-schema-v1_0_x';
import { componentsDefinitionSchema_v1_1_x } from './lib/components-schema-v1_1_x';
import { componentsDefinitionSchema_v1_2_x } from './lib/components-schema-v1_2_x';

async function compileSchema(componentsSchema: object, outPath: string, schemaName: string) {
    const ts = await compile(componentsSchema, schemaName, {
        bannerComment: `/* tslint:disable */
        /**
        * This file was automatically generated by json-schema-to-typescript.
        * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
        * and run json-schema-to-typescript to regenerate this file.
        */`,
    });
    fs.writeFileSync(outPath, ts);
}

compileSchema(componentsDefinitionSchema_v1_0_x,
    './lib/components-types-v1_0_x.ts', 'ComponentsDefinitionV10X');
compileSchema(componentsDefinitionSchema_v1_1_x,
    './lib/components-types-v1_1_x.ts', 'ComponentsDefinitionV11X');
compileSchema(componentsDefinitionSchema_v1_2_x,
    './lib/components-types-v1_2_x.ts', 'ComponentsDefinitionV12X');
