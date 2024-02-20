//ts-check
const{ test, expect } = require('@playwright/test');
const { LoginOrangeHrms } = require("../../pageObjects/loginOrangeHrms");

test("Login into Orange HRMS",async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState();
    const loginHRM = new LoginOrangeHrms(page);
    await loginHRM.fillLoginDetails();
    await expect.soft(loginHRM.dashboardHeader,"Verify user landed on dashboard").toHaveText("Dashboard");
});