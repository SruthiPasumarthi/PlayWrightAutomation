const constants = require("../inputData/constants.json");
const { CommonLibrary } = require("../Library/commonLibrary");

class DownloadInvoice{
    constructor(page){
        this.page = page;
        this.proceedToCheckOut = this.page.getByText('Proceed To Checkout');
        this.messageField = this.page.locator('textarea[name="message"]');
        this.placeOrder = this.page.getByRole('link', { name: 'Place Order' });
        this.signOrLogin = this.page.getByRole('link', { name: 'Register / Login' });
        this.name = this.page.locator('input[name="name_on_card"]');
        this.cardNumber = this.page.locator('input[name="card_number"]');
        this.cvv = this.page.getByPlaceholder('ex.');
        this.expireMonth = this.page.getByPlaceholder('MM');
        this.expireYear = this.page.getByPlaceholder('YYYY');
        this.payAndConfirm = this.page.getByRole('button', { name: 'Pay and Confirm Order' });

        this.downloadInvoice = this.page.getByRole('link', { name: 'Download Invoice' });

        this.continueInvoice = this.page.getByRole('link', { name: 'Continue' });     
    }
    async proceedMethod(){
        //verify you are on cart page
        await this.proceedToCheckOut.click();
        await this.signOrLogin.click();
    }
    async fillDetailsForInvoice(){
        await this.messageField.fill(constants.message);
        await this.placeOrder.click();
        await this.page.waitForLoadState();
        await this.name.fill(constants.userName);
        await this.cardNumber.fill("090");
        await this.expireMonth.fill("02");
        await this.expireYear.fill(constants.year);
        await this.payAndConfirm.click();
        await this.downloadInvoice.click();
        await this.continueInvoice.click();
    }
}
module.exports = { DownloadInvoice }