import { HomeLocatorProperties } from "./locator.properties";
import { element, ElementFinder } from 'protractor';

export class HomeElements {
    constructor(
        private properties: HomeLocatorProperties = new HomeLocatorProperties()
    ) { }

    public name(): ElementFinder {
        const nameElement = this.properties.name;
        return element(nameElement.locatorType(nameElement.locator))
    }

    public email(): ElementFinder {
        const email = this.properties.email;
        return element(email.locatorType(email.locator));
    }

    public password(): ElementFinder {
        const password = this.properties.password;
        return element(password.locatorType(password.locator));
    }

    public checkBoxLoveIcecream(): ElementFinder {
        const checkBoxIcecream = this.properties.checkBoxLoveIcecream;
        return element(checkBoxIcecream.locatorType(checkBoxIcecream.locator));
    }

    /**
     * get element from a specific employment status
     * @param {string} status employment status from the UI
     * 
     */
    public employmentStatus(status: string): ElementFinder {
        const employmentStatus = this.properties.employmentStatus;
        return element(employmentStatus.locatorType(employmentStatus.locator, status));
    }
    /**
     * Get element for a specific gender
     * @param {string} gender gender label as displayed on the UI
     */
    public genderDropdown(gender: string): ElementFinder {
        const genderDropdown = this.properties.genderDropdown;
        return element(genderDropdown.locatorType(genderDropdown.locator, gender));
    }
    /**
     * Get a success banner based on containing text
     * @param {string} message message as displayed on the UI
     */
    public successAlertBanner(message: string): ElementFinder {
        const successAlert = this.properties.successAlert;
        return element(successAlert.locatorType(successAlert.locator, message));
    }

    public submitButton(): ElementFinder {
        const submit = this.properties.submitButton;
        return element(submit.locatorType(submit.locator));
    }
}