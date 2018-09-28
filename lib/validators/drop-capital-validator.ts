/**
 * Validates usage of drop-capital control type
 * - allowed to use with dataType=data
 * - only one per a component
 */

import { Validator } from './validator';
import { ParsedComponentsDefinitionComponent, ParsedComponentsDefinitionProperty } from '../models';

const CONTROL = 'drop-capital';
const ALLOWED_DATA_TYPE = 'data';

export class DropCapitalValidator extends Validator {
    private countPerComponent(component: ParsedComponentsDefinitionComponent) : number {
        let amount = 0;
        component.properties.forEach((parsedProperty) => {
            if (parsedProperty.control.type === CONTROL) {
                amount++;
            }
        });
        return amount;
    }

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

        if (this.countPerComponent(component) > 1) {
            this.error(`Component "${component.component.name}" uses properties with "${CONTROL}" control type ` +
                `more that one time`);
        }
    }

    /**
     * Validate property with control type drop-capital uses the correct dataType.
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
