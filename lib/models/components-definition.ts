import { Label } from './label';
import { ComponentPropertyControl } from './component-property-controls';

/**
 * Type definition for Components definition file.
 *
 * This type definition works for multiple schemas.
 * New properties are made optional in the type definition,
 * although they may be required in the schema.
 */
export interface ComponentsDefinition {
    /**
     * Name of the components package
     */
    name: string;

    /**
     * Description of components package
     */
    description?: string;

    /**
     * Version of matching components model
     */
    version: string;

    /**
     * Default component inserted on pressing enter in a text field
     */
    defaultComponentOnEnter: string;

    /**
     * List of available components
     */
    components: Component[];

    /**
     * List of available component properties
     */
    componentProperties: ComponentProperty[];

    /**
     * List of groups shown in component chooser dialog
     */
    groups: ComponentGroup[];

    /**
     * Conversion rules for transforming one component into another component
     */
    conversionRules: ComponentConversionRules;

    /**
     * List of scripts to be included for html rendition of article
     */
    scripts?: string[];
}

export interface Component {
    /**
     * Unique component identifier
     */
    name: string;

    label: Label;

    /**
     * Icon shown for component in Digital Editor
     */
    icon: string;

    properties?: (string | ComponentProperty)[];

    /**
     * How this component is selectable, by default the user can select inside the component to select it
     */
    selectionMethod?: 'default' | 'handle';
    /**
     * Allows nesting the component in containers, defaults to 'yes'
     */
    allowNesting?: 'no' | 'yes' | 'one-level';
    /**
     * Restricts children of this component to the listed ones and can be further filtered down to also have content
     */
    restrictChildren?: {
        [k: string]: {
            withContent?: string;
        };
    };
    /**
     * Count characters, words and paragraphs of this component
     */
    countStatistics?: boolean;
    /**
     * Default component inserted on pressing enter in a text field (optional, overrides global value)
     */
    defaultComponentOnEnter?: string;
    /**
     * Configuration for directives in this component
     */
    directiveOptions?: {
        [k: string]: {
            /**
             * List of groups shown in component chooser dialog
             */
            groups?: {
            /**
             * Unique group identifier
             */
            name: string;
            label:
                | string
                | {
                    /**
                     * String key
                     */
                    key: string;
                    /**
                     * String replacement variables
                     */
                    values?: {
                    [k: string]: any;
                    };
                };
            /**
             * names of components in this group
             */
            components: string[];
            [k: string]: any;
            }[];
            autofill?: {
            /**
             * A key of source directive
             */
            source: string;
            /**
             * Metadata property name. The field is case sensitive. Slashes should be used to separate levels
             */
            metadataField?: string;
            /**
             * Defines when autofilling should be applied. If omitted then 'once' is applied
             */
            trigger?: 'once' | 'always';
            };
        };
    };
}

export interface ComponentProperty {
    /**
     * Unique identifier of component property
     */
    name: string;

    label: Label;
    /**
     * Directive key for properties that use a directive data type
     */
    directiveKey?: string;
    /**
     * Type of UI element and options.
     */
    control: ComponentPropertyControl;
    /**
     * Type of data being stored and how it is used. For directive data types it may also depend on the control type.
     */
    dataType:
    | 'styles'
    | 'inlineStyles'
    | 'data'
    | 'doc-editable'
    | 'doc-image'
    | 'doc-html'
    | 'doc-slideshow'
    | 'doc-media'
    | 'doc-interactive'
    | 'doc-link';
    /**
     * Default value of property upon component creation. By default the property value is not defined.
     */
    defaultValue?: string;
    group?: string;
    /**
     * Additional selector to define elements of the component which the property should be applied to.
     */
    selector?: string;
    /**
     * Feature flag that should be present for the property to show up. Always show if not specified.
     */
    featureFlag?: string;
}

/**
 * Component group definition.
 */
export interface ComponentGroup {
    /**
     * Unique group identifier
     */
    name: string;

    /**
     * Display name of group.
     */
    label: Label;

    /**
     * Names of components in this group
     */
    components: string[];
}

export interface ComponentConversionRules {
    [k: string]: ComponentConversionRule;
}

export interface ComponentConversionRule {
    [k: string]:
        | 'auto'
        | {
            type: 'simple';
            map: {
            [k: string]: string;
            };
            [k: string]: any;
        }
        | {
            type: 'from-container';
            container: string;
            [k: string]: any;
        }
        | {
            type: 'to-container';
            container: string;
            [k: string]: any;
        };
}