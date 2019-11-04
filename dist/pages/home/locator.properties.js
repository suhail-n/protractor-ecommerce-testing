"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const locator_1 = require("../../common/locator");
class HomeLocatorProperties {
    constructor() {
        this.name = locator_1.getLocatorProperties("name", "name", protractor_1.by.name, "This is a locator for the name box");
        this.email = locator_1.getLocatorProperties("email", "input[name='email']", protractor_1.by.css, "This is a locator for the email box");
        this.password = locator_1.getLocatorProperties("password", "exampleInputPassword1", protractor_1.by.id, "Password box");
        this.checkBoxLoveIcecream = locator_1.getLocatorProperties("Love Icecream Checkbox", "exampleCheck1", protractor_1.by.id, "I love icecream checkbox");
        this.genderDropdown = locator_1.getLocatorProperties("Gender Dropdown Option", "select#exampleFormControlSelect1 > option", protractor_1.by.cssContainingText, `Locator for the gender dropdown options. 
        Based on css containing text. Requires a text to be passed in.`);
        this.employmentStatus = locator_1.getLocatorProperties("Employment Status", "input[name='inlineRadioOptions']+label", protractor_1.by.cssContainingText, "Finds location of employment status based on css selector containing a text");
        this.successAlert = locator_1.getLocatorProperties("Success Form Alert Banner", "div.alert.alert-success", protractor_1.by.cssContainingText, "Finds location of a success alert banner css selector containing a text");
        this.submitButton = locator_1.getLocatorProperties("Form Submit Button", "input[value='Submit']", protractor_1.by.css, "Finds location of the submit button");
    }
}
exports.HomeLocatorProperties = HomeLocatorProperties;
