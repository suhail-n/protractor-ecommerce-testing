import { HomeElements } from './locator.elements';
import { should, expect } from "chai";
should();

export class Verify {
    constructor(private homeElements: HomeElements = new HomeElements()) { }

    public validateEmail(email: string) {
        expect(this.homeElements.email().getAttribute("value")).to.eventually.equal(email);
    }

    public validateName(name: string) {
        expect(this.homeElements.name().getAttribute("value")).to.eventually.equal(name);
    }

    public validateMissingNameFormFieldAlert(alertMessage: string = "Name is required") {
        expect(this.homeElements.formFieldAlertBanner(alertMessage).isDisplayed()).to.eventually.equal(true);
    }

    public validateMissingEmailFormFieldAlert(alertMessage: string = "Email is required") {
        expect(this.homeElements.formFieldAlertBanner(alertMessage).isDisplayed()).to.eventually.equal(true);
    }

    public async validateMissingFormFieldAlert(alertMessage: string) {
        // either return or await expect
        await expect(this.homeElements.formFieldAlertBanner(alertMessage).isDisplayed()).to.eventually.equal(true);
    }

    public validateIcecreamChecked(checked: boolean) {
        expect(this.homeElements.checkBoxLoveIcecream().isSelected()).to.eventually.equal(checked);
    }

    public validateSuccessAlert(message: string) {
        expect(this.homeElements.successAlertBanner(message).isPresent()).to.eventually.equal(true);
    }
}