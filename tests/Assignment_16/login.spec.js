//ts-check
const{ test, expect } = require('@playwright/test');
const { CommonLibrary } = require("../../utils/Library/commonLibrary");
const { SignUpAndLogin } = require("../../pageObjects/signUpAndLogin");

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});


test("Login", async({ page }) => {
    const login = new CommonLibrary(page);
    await login.commonMethods();
    const deleted = new SignUpAndLogin(page);
    await deleted.deleteNewAccount()
});