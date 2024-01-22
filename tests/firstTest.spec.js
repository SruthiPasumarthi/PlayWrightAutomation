//ts check
const{ test } = require('@playwright/test');

test("First Test Case",async function({ page }){
    await page.goto("https://www.google.com");
});