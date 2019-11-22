import { HomeElements } from './locator.elements';

export class Act {
    constructor(private homeElements: HomeElements = new HomeElements()) { }

    public async enterName(name: string) {
        await this.homeElements.name().sendKeys(name);
    }

    public async clickName() {
        await this.homeElements.name().click();
    }

    public async enterEmail(email: string) {
        await this.homeElements.email().sendKeys(email);
    }

    public async clickEmail() {
        await this.homeElements.email().click();
    }

    public async clickPassword() {
        await this.homeElements.password().click();
    }

    public async clickCheckBoxLoveIcecream() {
        await this.homeElements.checkBoxLoveIcecream().click();
    }

    public async clickEmploymentStatus(status: string) {
        await this.homeElements.employmentStatus(status).click();
    }

    public async clickGenderFromDropdown(gender: string) {
        await this.homeElements.genderDropdown(gender).click();
    }

    public async clickSubmit() {
        await this.homeElements.submitButton().click();
    }

}