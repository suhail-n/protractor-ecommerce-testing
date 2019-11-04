"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const locator_elements_1 = require("./locator.elements");
class Act {
    constructor(homeElements = new locator_elements_1.HomeElements()) {
        this.homeElements = homeElements;
    }
    enterName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeElements.name().sendKeys(name);
        });
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeElements.email().sendKeys(email);
        });
    }
    clickCheckBoxLoveIcecream() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeElements.checkBoxLoveIcecream().click();
        });
    }
    clickEmploymentStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeElements.employmentStatus(status).click();
        });
    }
    clickGenderFromDropdown(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeElements.genderDropdown(gender).click();
        });
    }
    clickSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homeElements.submitButton().click();
        });
    }
}
exports.Act = Act;
