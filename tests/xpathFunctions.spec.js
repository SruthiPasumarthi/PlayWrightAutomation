//ts check
const{ test, expect } = require('@playwright/test');

test("Xpath functions", async({ page }) =>{
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
    const count = await page.evaluate(() => {
        const elements = document.evaluate('count(//a[text() = "View Product"])', document, null, XPathResult.NUMBER_TYPE, null);
        return elements.numberValue;
      });
    console.log(`Number of links with text "View Product": ${count}`);
    const position = await page.locator("//ul[@class = 'nav navbar-nav']//li[position() = 3]").textContent();
    console.log(position);
    const textDisplay = await page.locator("//a[text() = 'Biba']").textContent();
    console.log(textDisplay);
    const containsText = await page.locator("//a[contains(text() , 'Tutorials')]").textContent();
    console.log(containsText);
});