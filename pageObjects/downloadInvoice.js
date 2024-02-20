const { expect } = require("@playwright/test")
const constants = require("../utils/inputData/constants.json");
const { AddProductsToCart } = require("../pageObjects/addProductsToCart");

class DownloadInvoice{
    constructor(page){
        this.page = page;
        this.cartButton = this.page.locator("//a[contains(text() , 'Cart')]");
        this.address = this.page.getByRole('heading', { name: 'Your delivery address' });
        this.confirmAddress1 = this.page.locator('#address_delivery').getByText('Hitech City');
        this.confirmAddress2 = this.page.locator('#address_delivery').getByText("Gachibowli");
        this.confirmMobile = this.page.locator('#address_delivery').getByText("9876543210")
        this.reviewOrder = this.page.getByRole('heading', { name: 'Review Your Order' });
        this.proceedToCheckOutButton = this.page.getByText('Proceed To Checkout');
        this.messageField = this.page.locator('textarea[name="message"]');
        this.placeOrder = this.page.getByRole('link', { name: 'Place Order' });
        this.signOrLogin = this.page.getByRole('link', { name: 'Register / Login' });
        this.name = this.page.locator('input[name="name_on_card"]');
        this.cardNumber = this.page.locator('input[name="card_number"]');
        this.cvv = this.page.getByPlaceholder('ex.');
        this.expireMonth = this.page.getByPlaceholder('MM');
        this.expireYear = this.page.getByPlaceholder('YYYY');
        this.payAndConfirm = this.page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.confirmMessage = this.page.getByText("Your Order has been placed Successfull");
        this.downloadInvoice = this.page.getByRole('link', { name: 'Download Invoice' });
        this.continueInvoice = this.page.getByRole('link', { name: 'Continue' });     
    }
    async proceedMethodAndSignup(){
        await expect(this.cartButton,"Verify you are on cart page").toBeVisible();
        await this.proceedToCheckOutButton.click();
        await this.signOrLogin.click();
    }
    async proceedToCheckOut(){
        await this.cartButton.click();
        await this.page.waitForLoadState();
        await this.proceedToCheckOutButton.click();        
    };
    async verifyAddressDetails(){
        await expect(this.address).toBeVisible();
        await expect(this.confirmAddress1).toHaveText(constants.address1);
        await expect(this.confirmAddress2).toHaveText(constants.address2);
        await expect(this.confirmMobile).toBeVisible();
    };
    async verifyOrderDetails(){
        const addToCart = new AddProductsToCart(this.page);
        await expect(this.reviewOrder).toBeVisible();
        expect(addToCart.productOneStartingPrice).toEqual(addToCart.productOneCartPrice);
        expect(addToCart.productTwoStartingPrice).toEqual(addToCart.productTwoCartPrice);
    }
    async fillDetailsForInvoice(){
        await this.messageField.fill(constants.message);
        await this.placeOrder.click();
        await this.page.waitForLoadState();
        await this.name.fill(constants.userName);
        await this.cardNumber.fill("999");
        await this.cvv.fill("909");
        await this.expireMonth.fill("02");
        await this.expireYear.fill(constants.year);
        // await this.page.on('console', (message) => {
        //     console.log(`Console message: ${message.text()}`);
        //   });
        await this.payAndConfirm.click();
        await this.downloadInvoice.click();
        //await expect(this.page.getByText('Anyone using this device can see downloaded files')).toBeVisible();
        //Verify invoice is downloaded successfully
        await this.continueInvoice.click();
        await this.page.waitForLoadState();
    }
}
module.exports = { DownloadInvoice }