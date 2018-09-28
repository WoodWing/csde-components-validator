/**
 * Validates usage of interactive control type
 */

import { Validator } from './validator';
import { ParsedComponentsDefinitionComponent, ParsedComponentsDefinitionProperty } from '../models';

const CONTROL = 'interactive';
const ALLOWED_DATA_TYPE = 'doc-interactive';

export class InteractiveValidator extends Validator {
    validate(): void {
        Object.values(this.definition.components).forEach((component) => this.validateComponent(component));
    }

    /**
     * Iterate through all properties of given component.
     *
     * @param component
     */
    private validateComponent(component: ParsedComponentsDefinitionComponent): void {
        component.properties.forEach((property) => this.validateProperty(property));
    }

    /**
     * Validate property with control type interactive uses the correct dataType.
     *
     * @param property
     */
    private validateProperty(property: ParsedComponentsDefinitionProperty) {
        if (property.control.type === CONTROL && property.dataType !== ALLOWED_DATA_TYPE) {
            this.error(`Property "${property.name}" uses "${CONTROL}" control type which is allowed to use with ` +
                `dataType="${ALLOWED_DATA_TYPE}" only`);
        }
    }
}
