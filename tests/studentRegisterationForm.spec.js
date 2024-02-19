//ts check
const{ test,expect } = require('@playwright/test')


test("Visibility Of Elements", async({ page }) =>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.waitForLoadState();
    await expect(page.getByPlaceholder('First Name'), "First Name field is visible ").toBeVisible();
    await expect(page.getByPlaceholder('Last Name'), "Last Name field is visible").toBeVisible();
    await expect(page.getByPlaceholder('name@example.com'),"Validating email field").toBeVisible();
    await expect(page.getByLabel('Male',{ exact: true }),"Female Radio Button is visible").toBeVisible();
    await expect(page.getByLabel('Female'),"Female Radio Button is visible").toBeVisible();
    await expect(page.getByLabel('Other'),"Female Radio Button is visible").toBeVisible();
    await expect(page.getByPlaceholder('Mobile Number'), "Mobile number field is visible ").toBeVisible();
    await expect(page.locator("#dateOfBirthInput")).toBeVisible();
    await expect(page.locator("//div[@class = 'subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']")).toBeVisible();
    await expect(page.getByLabel('Sports'),"Sports check box is visible").toBeVisible();
    await expect(page.getByLabel('Reading'),"Reading check box is visible").toBeVisible();
    await expect(page.getByLabel('Music'),"Music check box is visible").toBeVisible();
    await expect(page.locator("#uploadPicture")).toBeVisible();
    await expect(page.getByPlaceholder('Current Address'), "Address field is visible").toBeVisible();
    await expect(page.locator("//div[text() = 'Select State']")).toBeVisible();
    await expect(page.locator("#city")).toBeVisible();
});