import { ComponentSet } from '../models';
import { Validator } from './validator';
import * as path from 'path';

export class CustomStylesValidator extends Validator {
    constructor(error: (errorMessage: string) => false, definition: ComponentSet, private filePaths: Set<string>) {
        super(error, definition);
    }

    async validate(): Promise<void> {
        this.checkCustomStylesFolder();

        if (!this.componentSet.customStyles) {
            return;
        }

        this.componentSet.customStyles.forEach((customStyle) => {
            if (customStyle.default) {
                if (!this.filePaths.has(path.normalize(customStyle.default))) {
                    this.error(`The default file for custom style "${customStyle.label}" does not exist`);
                }
            }
        });
    }

    private checkCustomStylesFolder() {
        if (!Array.from(this.filePaths).every((file) => !file.toLowerCase().startsWith('styles/customstyles/'))) {
            this.error(`The "styles" directory can't contain a directory called "customStyles".`);
        }
    }
}
