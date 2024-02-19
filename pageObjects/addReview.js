import { expect } from '@playwright/test';
const constants = require("../inputData/constants.json")

class AddReview{
    constructor(page){
        this.page = page;
        this.productsHeader = this.page.getByRole('link', { name: ' Products' });
        this.viewProduct = this.page.locator('.choose > .nav > li > a').first();
        this.nameField = this.page.getByPlaceholder('Your Name');
        this.emailField = this.page.getByPlaceholder('Email Address', { exact: true });
        this.reviewMessage = this.page.getByPlaceholder('Add Review Here!');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    }
    async fillReviewDetails(){
        await this.productsHeader.click();
        await this.viewProduct.click();
        await this.nameField.fill(constants.userName);
        await this.emailField.fill(constants.standardEmail);
        await this.reviewMessage.fill(constants.reviewMessage);
        await expect(this.page.getByText('Write Your Review Thank you')).toBeVisible();
    }
}
module.exports = {AddReview};