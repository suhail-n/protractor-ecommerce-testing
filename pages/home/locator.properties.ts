import { by } from "protractor";
import { getLocatorProperties } from '../../common/locator';

export class HomeLocatorProperties {
    public name = getLocatorProperties(
        "name",
        "name",
        by.name,
        "This is a locator for the name box"
    );
    public email = getLocatorProperties(
        "email",
        "input[name='email']",
        by.css,
        "This is a locator for the email box"
    );
    public password = getLocatorProperties(
        "password",
        "exampleInputPassword1",
        by.id,
        "Password box"
    )
    public checkBoxLoveIcecream = getLocatorProperties(
        "Love Icecream Checkbox",
        "exampleCheck1",
        by.id,
        "I love icecream checkbox"
    );
    public genderDropdown = getLocatorProperties(
        "Gender Dropdown Option",
        "select#exampleFormControlSelect1 > option",
        by.cssContainingText,
        `Locator for the gender dropdown options. 
        Based on css containing text. Requires a text to be passed in.`
    );
    public employmentStatus = getLocatorProperties(
        "Employment Status",
        "input[name='inlineRadioOptions']+label",
        by.cssContainingText,
        "Finds location of employment status based on css selector containing a text"
    );
    public successAlert = getLocatorProperties(
        "Success Form Alert Banner",
        "div.alert.alert-success",
        by.cssContainingText,
        "Finds location of a success alert banner css selector containing a text"
    );
    public submitButton = getLocatorProperties(
        "Form Submit Button",
        "input[value='Submit']",
        by.css,
        "Finds location of the submit button"
    );
}