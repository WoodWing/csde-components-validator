/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ComponentsDefinitionV11X {
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
  components: {
    /**
     * Unique component identifier
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
     * Icon shown for component in Digital Editor
     */
    icon: string;
    /**
     * names of properties this component can use
     */
    properties?: (
      | string
      | {
          /**
           * Unique identifier of component property
           */
          name?: string;
          label?:
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
           * Directive key for properties that use a directive data type
           */
          directiveKey?: string;
          /**
           * Type of UI element and options.
           */
          control?:
            | {
                /**
                 * Dropdown with fixed number of options
                 */
                type: "select";
                options: {
                  caption:
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
                   * Value of the item. Omit it if the option should simply clean the property up
                   */
                  value?: string;
                }[];
              }
            | {
                /**
                 * Radio control type with fixed number of options
                 */
                type: "radio";
                options: {
                  caption:
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
                   * Icon shown for the option
                   */
                  icon: string;
                  /**
                   * Value of the item. Omit it if the option should simply clean the property up
                   */
                  value?: string;
                }[];
              }
            | {
                /**
                 * Checkbox toggling between value and no value
                 */
                type: "checkbox";
                value: string;
              }
            | {
                /**
                 * Checkbox toggling between value and no value with additional checking of link directives. The property is set and disabled if the component has a non empty link directive
                 */
                type: "disable-fullscreen-checkbox";
              }
            | {
                /**
                 * Text field property
                 */
                type: "text";
                /**
                 * Value validation regexp pattern
                 */
                pattern?: string;
                /**
                 * Default value which is used instead of empty value
                 */
                defaultValue?: string;
                /**
                 * Unit type like em, px etc
                 */
                unit?: string;
                inputPlaceholder?:
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
                 * Makes the text field read only from the editor UI
                 */
                readonly?: boolean;
              }
            | {
                /**
                 * Time field property
                 */
                type: "time";
                [k: string]: any;
              }
            | {
                /**
                 * Color picker field property
                 */
                type: "colorPicker";
                /**
                 * Enable opacity setting
                 */
                opacity?: boolean;
              }
            | {
                /**
                 * Image editor field property
                 */
                type: "image-editor";
                /**
                 * Enable focuspoint feature
                 */
                focuspoint?: boolean;
              }
            | {
                /**
                 * Drop capital field property
                 */
                type: "drop-capital";
                /**
                 * Minimum value of characters number
                 */
                charactersMinimum?: number;
                /**
                 * Default value of characters number
                 */
                charactersDefault?: number;
                /**
                 * Maximum value of characters number
                 */
                charactersMaximum?: number;
                /**
                 * Minimum value of lines number
                 */
                linesMinimum?: number;
                /**
                 * Default value of lines number
                 */
                linesDefault?: number;
                /**
                 * Maximum value of lines number
                 */
                linesMaximum?: number;
              }
            | {
                /**
                 * Enables media properties field property
                 */
                type: "media-properties";
                /**
                 * Defines media type. If omitted then both types are supported
                 */
                mediaType?: "video" | "social";
              }
            | {
                /**
                 * Enables fitting option for an image directive
                 */
                type: "fitting";
              }
            | {
                /**
                 * Adds slides section to component properties (for doc-slideshow)
                 */
                type: "slides";
                /**
                 * List of properties to include from active slide component properties
                 */
                include?: any[];
                /**
                 * List of properties to exclude from active slide component properties
                 */
                exclude?: any[];
              }
            | {
                /**
                 * Configuration of interactive directive
                 */
                type: "interactive";
                /**
                 * Default configuration of interactive directive
                 */
                defaultConfig: {
                  [k: string]: any;
                };
                /**
                 * A link which is used to edit the configuration
                 */
                editLink?: string;
                /**
                 * A link which is used to show the directive
                 */
                viewLink: string;
              }
            | {
                /**
                 * Adds a header at property position
                 */
                type: "header";
              }
            | {
                /**
                 * Textarea field property
                 */
                type: "textarea";
                inputPlaceholder?:
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
              }
            | {
                /**
                 * Url field property
                 */
                type: "url";
                inputPlaceholder?:
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
              };
          /**
           * Type of data being stored and how it is used. For directive data types it may also depend on the control type.
           */
          dataType?:
            | "styles"
            | "inlineStyles"
            | "data"
            | "doc-editable"
            | "doc-image"
            | "doc-html"
            | "doc-slideshow"
            | "doc-media"
            | "doc-interactive"
            | "doc-link";
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
        })[];
    /**
     * How this component is selectable, by default the user can select inside the component to select it
     */
    selectionMethod?: "default" | "handle";
    /**
     * Allows nesting the component in containers, defaults to "yes"
     */
    allowNesting?: "no" | "yes" | "one-level";
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
     * Rules for filling directives content automatically. Rule key is a key of destination directive
     */
    autofill?: {
      [k: string]: {
        /**
         * A key of source directive
         */
        source: string;
        /**
         * Metadata property name. The field is case sensitive. Slashes should be used to separate levels
         */
        metadataField?: string;
        /**
         * Defines when autofilling should be applied. If omitted then "once" is applied
         */
        trigger?: "once" | "always";
      };
    };
    /**
     * Groups for doc-container component picker
     */
    groups?: {
      /**
       * List of groups shown in component chooser dialog
       */
      [k: string]: {
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
    };
  }[];
  /**
   * List of available component properties
   */
  componentProperties: {
    /**
     * Unique identifier of component property
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
     * Directive key for properties that use a directive data type
     */
    directiveKey?: string;
    /**
     * Type of UI element and options.
     */
    control:
      | {
          /**
           * Dropdown with fixed number of options
           */
          type: "select";
          options: {
            caption:
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
             * Value of the item. Omit it if the option should simply clean the property up
             */
            value?: string;
          }[];
        }
      | {
          /**
           * Radio control type with fixed number of options
           */
          type: "radio";
          options: {
            caption:
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
             * Icon shown for the option
             */
            icon: string;
            /**
             * Value of the item. Omit it if the option should simply clean the property up
             */
            value?: string;
          }[];
        }
      | {
          /**
           * Checkbox toggling between value and no value
           */
          type: "checkbox";
          value: string;
        }
      | {
          /**
           * Checkbox toggling between value and no value with additional checking of link directives. The property is set and disabled if the component has a non empty link directive
           */
          type: "disable-fullscreen-checkbox";
        }
      | {
          /**
           * Text field property
           */
          type: "text";
          /**
           * Value validation regexp pattern
           */
          pattern?: string;
          /**
           * Default value which is used instead of empty value
           */
          defaultValue?: string;
          /**
           * Unit type like em, px etc
           */
          unit?: string;
          inputPlaceholder?:
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
           * Makes the text field read only from the editor UI
           */
          readonly?: boolean;
        }
      | {
          /**
           * Time field property
           */
          type: "time";
          [k: string]: any;
        }
      | {
          /**
           * Color picker field property
           */
          type: "colorPicker";
          /**
           * Enable opacity setting
           */
          opacity?: boolean;
        }
      | {
          /**
           * Image editor field property
           */
          type: "image-editor";
          /**
           * Enable focuspoint feature
           */
          focuspoint?: boolean;
        }
      | {
          /**
           * Drop capital field property
           */
          type: "drop-capital";
          /**
           * Minimum value of characters number
           */
          charactersMinimum?: number;
          /**
           * Default value of characters number
           */
          charactersDefault?: number;
          /**
           * Maximum value of characters number
           */
          charactersMaximum?: number;
          /**
           * Minimum value of lines number
           */
          linesMinimum?: number;
          /**
           * Default value of lines number
           */
          linesDefault?: number;
          /**
           * Maximum value of lines number
           */
          linesMaximum?: number;
        }
      | {
          /**
           * Enables media properties field property
           */
          type: "media-properties";
          /**
           * Defines media type. If omitted then both types are supported
           */
          mediaType?: "video" | "social";
        }
      | {
          /**
           * Enables fitting option for an image directive
           */
          type: "fitting";
        }
      | {
          /**
           * Adds slides section to component properties (for doc-slideshow)
           */
          type: "slides";
          /**
           * List of properties to include from active slide component properties
           */
          include?: any[];
          /**
           * List of properties to exclude from active slide component properties
           */
          exclude?: any[];
        }
      | {
          /**
           * Configuration of interactive directive
           */
          type: "interactive";
          /**
           * Default configuration of interactive directive
           */
          defaultConfig: {
            [k: string]: any;
          };
          /**
           * A link which is used to edit the configuration
           */
          editLink?: string;
          /**
           * A link which is used to show the directive
           */
          viewLink: string;
        }
      | {
          /**
           * Adds a header at property position
           */
          type: "header";
        }
      | {
          /**
           * Textarea field property
           */
          type: "textarea";
          inputPlaceholder?:
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
        }
      | {
          /**
           * Url field property
           */
          type: "url";
          inputPlaceholder?:
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
        };
    /**
     * Type of data being stored and how it is used. For directive data types it may also depend on the control type.
     */
    dataType:
      | "styles"
      | "inlineStyles"
      | "data"
      | "doc-editable"
      | "doc-image"
      | "doc-html"
      | "doc-slideshow"
      | "doc-media"
      | "doc-interactive"
      | "doc-link";
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
  }[];
  /**
   * List of groups shown in component chooser dialog
   */
  groups: {
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
  /**
   * Conversion rules for transforming one component into another component
   */
  conversionRules: {
    [k: string]: {
      [k: string]:
        | "auto"
        | {
            type: "simple";
            map: {
              [k: string]: string;
            };
            [k: string]: any;
          }
        | {
            type: "from-container";
            container: string;
            [k: string]: any;
          }
        | {
            type: "to-container";
            container: string;
            [k: string]: any;
          };
    };
  };
  /**
   * List of scripts to be included for html rendition of article
   */
  scripts?: string[];
}
