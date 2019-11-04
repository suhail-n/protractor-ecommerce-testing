import { HomeElements } from './locator.elements';
export class Verify {
    constructor(private homeElements: HomeElements = new HomeElements()) { }

    public validateEmail(email: string) {
        expect(this.homeElements.email().getAttribute("value")).toBe(email);
    }

    public validateName(name: string) {
        expect(this.homeElements.name().getAttribute("value")).toBe(name);
    }

    public validateIcecreamChecked(checked: boolean) {
        expect(this.homeElements.checkBoxLoveIcecream().isSelected()).toBe(checked);
    }

    public validateSuccessAlert(message: string) {
        expect(this.homeElements.successAlertBanner(message).isPresent()).toBe(true);
    }
}