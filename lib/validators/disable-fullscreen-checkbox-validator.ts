/**
 * Validates usage of disable-fullscreen-checkbox control type
 */

import { Validator } from './validator';
import { ParsedComponentsDefinitionComponent, ParsedComponentsDefinitionProperty } from '../models';

const CONTROL = 'disable-fullscreen-checkbox';
const ALLOWED_DATA_TYPE = 'styles';

export class DisableFullscreenCheckboxValidator extends Validator {
    validate(): void {
        Object.values(this.definition.components).forEach((component) => this.validateComponent(component));
    }

    /**
     * Iterate through all properties of given component.
     *
     * @param errorReporter
     * @param component
     */
    private validateComponent(component: ParsedComponentsDefinitionComponent): void {
        component.properties.forEach((property) => this.validateProperty(property));
    }

    /**
     * Validate property with control type disable-fullscreen-checkbox uses the correct dataType.
     *
     * @param errorReporter
     * @param property
     */
    private validateProperty(property: ParsedComponentsDefinitionProperty) {
        if (property.control.type === CONTROL && property.dataType !== ALLOWED_DATA_TYPE) {
            this.error(`Property "${property.name}" uses "${CONTROL}" control type which is allowed to use with ` +
                `dataType="${ALLOWED_DATA_TYPE}" only`);
        }
    }
}
