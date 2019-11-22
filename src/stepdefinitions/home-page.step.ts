import { browser } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { Base } from '../pages/base/base';
import { ECommerceHome } from '../pages/home/home';

const home = new ECommerceHome();
const homeAction = home.act;
const homeVerify = home.verify;

Given('I will navigate to ecommerce web app', async function () {
    // Write code here that turns the phrase above into concrete actions
    const base = new Base();
    console.log("Navigating")
    await base.navigate();
});

When('I click the name field', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("click name")
    await homeAction.clickName();
    console.log("after click name")
});

When('I click the email field', async function () {
    // Write code here that turns the phrase above into concrete actions
    await homeAction.clickEmail();
});

When('I click the password field', async function () {
    // Write code here that turns the phrase above into concrete actions
    await homeAction.clickPassword();
});

Then('Form field alert containing {string} is displayed', async function (message: string) {
    // Write code here that turns the phrase above into concrete actions
    await homeVerify.validateMissingFormFieldAlert(message);
});