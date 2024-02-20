//ts-check
const{ test } = require('@playwright/test');
const { AddReview } = require("../../pageObjects/addReview");

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});

test("Review the product", async({page}) => {
    const review = new AddReview(page);
    await review.fillReviewDetails();
});


