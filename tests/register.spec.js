//ts-check
const{ test, expect } = require('@playwright/test');
const { SignUpAndLogin } = require("../pageObjects/signUpAndLogin");


test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});


test("SignUp", async({ page }) => {
    const signupWithNew = new SignUpAndLogin(page);
    await expect(signupWithNew.homeIcon,"Visible").toHaveText(" Home");
    await signupWithNew.signUpNewUser();
    await signupWithNew.registerationDetails();
    //signupWithNew.deleteNewAccount();
});