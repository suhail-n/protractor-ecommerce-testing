"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locator_elements_1 = require("./locator.elements");
class Verify {
    constructor(homeElements = new locator_elements_1.HomeElements()) {
        this.homeElements = homeElements;
    }
    validateEmail(email) {
        expect(this.homeElements.email().getAttribute("value")).toBe(email);
    }
    validateName(name) {
        expect(this.homeElements.name().getAttribute("value")).toBe(name);
    }
    validateIcecreamChecked(checked) {
        expect(this.homeElements.checkBoxLoveIcecream().isSelected()).toBe(checked);
    }
    validateSuccessAlert(message) {
        expect(this.homeElements.successAlertBanner(message).isPresent()).toBe(true);
    }
}
exports.Verify = Verify;
