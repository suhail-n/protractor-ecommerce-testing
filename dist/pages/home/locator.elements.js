"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locator_properties_1 = require("./locator.properties");
const protractor_1 = require("protractor");
class HomeElements {
    constructor(properties = new locator_properties_1.HomeLocatorProperties()) {
        this.properties = properties;
    }
    name() {
        const nameElement = this.properties.name;
        return protractor_1.element(nameElement.locatorType(nameElement.locator));
    }
    email() {
        const email = this.properties.email;
        return protractor_1.element(email.locatorType(email.locator));
    }
    password() {
        const password = this.properties.password;
        return protractor_1.element(password.locatorType(password.locator));
    }
    checkBoxLoveIcecream() {
        const checkBoxIcecream = this.properties.checkBoxLoveIcecream;
        return protractor_1.element(checkBoxIcecream.locatorType(checkBoxIcecream.locator));
    }
    /**
     * get element from a specific employment status
     * @param {string} status employment status from the UI
     *
     */
    employmentStatus(status) {
        const employmentStatus = this.properties.employmentStatus;
        return protractor_1.element(employmentStatus.locatorType(employmentStatus.locator, status));
    }
    /**
     * Get element for a specific gender
     * @param {string} gender gender label as displayed on the UI
     */
    genderDropdown(gender) {
        const genderDropdown = this.properties.genderDropdown;
        return protractor_1.element(genderDropdown.locatorType(genderDropdown.locator, gender));
    }
    /**
     * Get a success banner based on containing text
     * @param {string} message message as displayed on the UI
     */
    successAlertBanner(message) {
        const successAlert = this.properties.successAlert;
        return protractor_1.element(successAlert.locatorType(successAlert.locator, message));
    }
    submitButton() {
        const submit = this.properties.submitButton;
        return protractor_1.element(submit.locatorType(submit.locator));
    }
}
exports.HomeElements = HomeElements;
