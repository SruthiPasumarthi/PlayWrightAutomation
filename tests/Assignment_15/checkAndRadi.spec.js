//ts-check

const { test , expect} = require("@playwright/test");
const { CheckAndRadio } = require("../../pageObjects/checkAndRadio");

test("Validate checkboxes and Radio Buttons", async({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/basic-controls.html");
    await page.waitForLoadState();
    const checkFields = new CheckAndRadio(page);
    await checkFields.checkTheCheckboxes();
});