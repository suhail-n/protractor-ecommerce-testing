import { After, Before, HookScenarioResult, Status } from "cucumber";
import { browser } from 'protractor';
import { async } from "q";

Before({ tags: "@smoke and @foo" }, async function () {
    console.log("This is a hook to execute before tags '@smoke and @foo'");
});

After({ tags: "@smoke and @foo" }, function (scenario: HookScenarioResult) {
    console.log("After Hook '@smoke and @foo'");
    if (scenario.result.status === Status.FAILED) {
        console.error("@smoke and @foo Failed");
        console.log("-----------------------------------------------------------------")
        // get the text of the gherking step that failed
        console.log(scenario.pickle.steps[4].text);
        // scenario has all the information related to the fail such as location and line number that failed
        console.log(scenario);
        console.log("-----------------------------------------------------------------")
    }
});

// execute after every scenario
After(async function (scenario: HookScenarioResult) {
    if (scenario.result.status === Status.FAILED) {
        const buffer = await browser.takeScreenshot()
        this.attach(buffer, "image/png");
    }
})