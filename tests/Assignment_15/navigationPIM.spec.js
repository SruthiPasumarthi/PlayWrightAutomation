//ts-check

const { test, expect } = require("@playwright/test");
const { NavigationPIM } = require("../../pageObjects/navigationPIM");
const { LoginOrangeHrms } = require("../../pageObjects/loginOrangeHrms");

test.describe("About total test", ()=>{
    test("Navigate to PIM module", async({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.waitForLoadState();
        await test.step("login into HRM", async() => {
            const loginHRM = new LoginOrangeHrms(page);
            await loginHRM.fillLoginDetails();
            await expect(loginHRM.dashboardHeader,"Verify user landed on dashboard").toHaveText("Dashboard");
        });
        await test.step("Verify navigate to PIM", async() => {
            const navigationOFPIM = new NavigationPIM(page);
            await navigationOFPIM.navigateToPIMPage();
            await expect(navigationOFPIM.headerOfPIM,"Verify user landed on PIM page").toHaveText("PIM");
        });
    });
}); 