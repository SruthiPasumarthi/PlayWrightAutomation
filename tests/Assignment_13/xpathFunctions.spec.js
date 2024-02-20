//ts check
const{ test, expect } = require('@playwright/test');

test("Xpath functions", async({ page }) =>{
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
    const count = await page.evaluate(() => {
      const elements = document.evaluate('count(//a[text() = "View Product"])', document, null, XPathResult.NUMBER_TYPE, null);
      return elements.numberValue;
    });
    console.log(`Count of "View Product" element is : ${count}`);
    const position = await page.locator("//ul[@class = 'nav navbar-nav']//li[position() = 3]").textContent();
    console.log("Print the text by using position",position);
    const textDisplay = await page.locator("//h2[text() = 'Brands']").textContent();
    console.log("Print the text by using text",textDisplay);
    const containsText = await page.locator("//a[contains(text() , 'Tutorials')]").textContent();
    console.log("Print the text by using contains",containsText);
});