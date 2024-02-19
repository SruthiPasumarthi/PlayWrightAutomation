//ts-check
const{ test, expect } = require('@playwright/test');
const { CommonLibrary } = require("../Library/commonLibrary");


test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});


test("Login", async({ page }) => {
    const login = new CommonLibrary(page);
    await login.commonMethods();
});