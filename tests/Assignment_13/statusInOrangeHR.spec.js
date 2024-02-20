//ts check
const{ test, expect } = require('@playwright/test');

test("Validate Status element in Orange HRM under status", async({ page }) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState();
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator("//button[@type = 'submit']").click();
    await page.locator("//span[text() = 'Admin']").click();
    await page.locator("//i[@class = 'oxd-icon bi-plus oxd-button-icon']").click();
    const userName = await page.locator('//label[text() = "User Role"]//parent::div//following-sibling::div//div[contains(text(),"Select")]').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    const status = await page.locator('//label[text() = "Status"]//parent::div//following-sibling::div//div[contains(text(),"Select")]').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    const user = Math.random().toString(36).substring(2,7);
    await page.locator('//label[text() = "Username"]//parent::div//following-sibling::div//input[@class = "oxd-input oxd-input--active"]').fill(user);
    await page.locator('//label[text() = "Password"]//parent::div//following-sibling::div//input[@class = "oxd-input oxd-input--active"]').fill("Test@123");
    await page.locator('//label[text() = "Confirm Password"]//parent::div//following-sibling::div//input[@class = "oxd-input oxd-input--active"]').fill("Test@123");
    await page.getByPlaceholder('Type for hints...').click();
    await page.keyboard.press('S');
    await page.waitForTimeout(3000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.locator("//button[@type = 'submit']").click();
    await page.locator("//h5[text() = 'System Users']//parent::div//parent::div[@class = 'oxd-table-filter-header']//following-sibling::div[@class = 'oxd-table-filter-area']//input[@class = 'oxd-input oxd-input--active']").fill(user, { force: true });
    await page.locator("//div[@class = 'oxd-form-actions']//button[text() = ' Search ']").click();
    await expect(page.locator("//div[@class = 'oxd-loading-spinner']")).toBeHidden();
    const statusOfCreatedUser = await page.locator("//div[@class = 'oxd-table-card']//div[5]").textContent();
    console.log(statusOfCreatedUser);
});