import { browser } from "protractor";
import { Base } from './pages/base/base';
import { ECommerceHome } from './pages/home/home';

describe("Fill Out ECommerce Form", function () {

    let form: { email: string, name: string, checkboxIceCream: boolean, employmentStatus: string, gender: string };
    it('Should fill out form and validate success message', async function () {
        const home = new ECommerceHome();
        const homeAction = home.act;
        // const homeVerify = home.verify;
        await homeAction.enterEmail(form.email);
        await homeAction.enterName(form.name);
        if (form.checkboxIceCream) await homeAction.clickCheckBoxLoveIcecream();
        await homeAction.clickEmploymentStatus(form.employmentStatus);
        await homeAction.clickGenderFromDropdown(form.gender);
        await homeAction.clickSubmit();
        await browser.sleep(1000);
        console.log("done");
    });

    it("validate form data is entered correctly", async () => {
        const home = new ECommerceHome();
        const homeVerify = home.verify;

        homeVerify.validateEmail(form.email);
        homeVerify.validateName(form.name);
        homeVerify.validateIcecreamChecked(form.checkboxIceCream);
        homeVerify.validateSuccessAlert("Success!");
        console.log("Done validate form data");
        await browser.sleep(1000);
    });

    beforeAll(async () => {
        // setup data 
        form = {
            email: "test@gmail.com",
            checkboxIceCream: true,
            employmentStatus: "Student",
            gender: "Female",
            name: "Bobby"
        };

        const base = new Base();
        await base.navigate();
    });
})