import { by } from 'protractor';

type Locators =
    typeof by.addLocator |
    typeof by.binding |
    typeof by.buttonText |
    typeof by.className |
    typeof by.css |
    typeof by.cssContainingText |
    typeof by.deepCss |
    typeof by.exactBinding |
    typeof by.exactRepeater |
    typeof by.id |
    typeof by.js |
    typeof by.linkText |
    typeof by.model |
    typeof by.name |
    typeof by.options |
    typeof by.partialButtonText |
    typeof by.partialLinkText |
    typeof by.repeater |
    typeof by.tagName |
    typeof by.xpath;


type LocType<T extends Locators> = {
    name: string,
    locator: string,
    locatorType: T,
    description?: string
};

export function getLocatorProperties<T extends Locators>(name: string, locator: string, locatorType: T, description?: string): LocType<T> {
    let props: LocType<typeof locatorType> = {
        name, locator, locatorType, description
    };
    return props;
}
