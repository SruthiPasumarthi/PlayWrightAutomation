const { expect } = require("@playwright/test");
const constants = require("../utils/inputData/constants.json")

class ContactUs{
    constructor(page){
        this.page = page;
        this.contactMenu = this.page.locator("//a[contains(text() , 'Contact us')]");
        this.getInTouchHeader = this.page.locator("//h2[text() = 'Get In Touch']");
        this.nameField = this.page.locator("//input[@placeholder = 'Name']");
        this.emailField = this.page.locator("//input[@placeholder = 'Email']");
        this.subjectField = this.page.locator("//input[@placeholder = 'Subject']");
        this.messageField = this.page.locator("//textarea[@placeholder = 'Your Message Here']");
        this.uploadFileButton = this.page.locator("//input[@name = 'upload_file']");
        this.submitButton = this.page.locator("//input[@name = 'upload_file']");
    }
    async fillContactUs(){
        await this.contactMenu.click();
        await expect(this.getInTouchHeader,"validate header").toHaveText("Get In Touch");
        await this.nameField.fill(constants.userName);
        await this.emailField.fill(constants.standardEmail);
        await this.subjectField.fill(constants.subject);
        await this.messageField.fill(constants.message);
    }
    async uploadFile(filepath) {
        await this.uploadFileButton.setInputFiles(filepath);
        await this.page.once('dialog', dialog => {
            //console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(() => {});
        });
        await this.page.waitForLoadState();
        await this.submitButton.click();
        await this.page.waitForLoadState();
    }
}
module.exports = { ContactUs };