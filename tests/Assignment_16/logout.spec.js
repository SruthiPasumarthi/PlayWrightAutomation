//ts-check
const{ test, expect } = require('@playwright/test');
const { SignUpAndLogin } = require("../../pageObjects/signUpAndLogin");
const { CommonLibrary } = require("../../utils/Library/commonLibrary");


test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});


test("Login", async({ page }) => {
    const login = new CommonLibrary(page);
    await login.commonMethods();
    const logout = new SignUpAndLogin(page);
    await logout.logoutMethod();
});