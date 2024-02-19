//ts-check
const{ test, expect } = require('@playwright/test');
const { SignUpAndLogin } = require("../pageObjects/signUpAndLogin");
const { CommonLibrary } = require("../Library/commonLibrary");


test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});


test.only("Login", async({ page }) => {
    const login = new CommonLibrary(page);
    await login.commonMethods();
    const logout = new SignUpAndLogin(page);
    await logout.logoutMethod();
});