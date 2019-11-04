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
const protractor_1 = require("protractor");
const base_1 = require("./pages/base/base");
const home_1 = require("./pages/home/home");
describe("Fill Out ECommerce Form", function () {
    let form;
    it('Should fill out form and validate success message', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const home = new home_1.ECommerceHome();
            const homeAction = home.act;
            // const homeVerify = home.verify;
            yield homeAction.enterEmail(form.email);
            yield homeAction.enterName(form.name);
            if (form.checkboxIceCream)
                yield homeAction.clickCheckBoxLoveIcecream();
            yield homeAction.clickEmploymentStatus(form.employmentStatus);
            yield homeAction.clickGenderFromDropdown(form.gender);
            yield homeAction.clickSubmit();
            yield protractor_1.browser.sleep(1000);
            console.log("done");
        });
    });
    it("validate form data is entered correctly", () => __awaiter(this, void 0, void 0, function* () {
        const home = new home_1.ECommerceHome();
        const homeVerify = home.verify;
        homeVerify.validateEmail(form.email);
        homeVerify.validateName(form.name);
        homeVerify.validateIcecreamChecked(form.checkboxIceCream);
        homeVerify.validateSuccessAlert("Success!");
        console.log("Done validate form data");
        yield protractor_1.browser.sleep(1000);
    }));
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        // setup data 
        form = {
            email: "test@gmail.com",
            checkboxIceCream: true,
            employmentStatus: "Student",
            gender: "Female",
            name: "Bobby"
        };
        const base = new base_1.Base();
        yield base.navigate();
    }));
});
