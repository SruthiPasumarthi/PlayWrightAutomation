//ts-check
const { test } = require("@playwright/test");
const { ContactUs } = require("../../pageObjects/contactUs");

test("Validate Contact Us Form" , async({page})=>{
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
    const contactUsForm = new ContactUs(page);
    await contactUsForm.fillContactUs();
    await contactUsForm.uploadFile("file-sample_150kB.pdf");

});