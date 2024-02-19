//ts-check
const{ expect } = require('@playwright/test');
const constants = require("../inputData/constants.json")

class SignUpAndLogin{
    constructor(page){
        this.page = page;
        this.homeIcon = this.page.locator("//a[text() = ' Home' and @style = 'color: orange;' ]");
        this.signUpLogin = this.page.locator("//a[contains(text() , 'Signup')]");
        this.name = this.page.locator("//input[@placeholder = 'Name']");
        this.userGmail = (Math.random().toString(36).substring(2,7))+constants.userGmailExtension;
        this.emailField = this.page.locator("//button[text() = 'Signup']//preceding-sibling::input[@type = 'email']");
        this.signUpButton = this.page.locator("//button[text() = 'Signup']");
        this.enterAccountInformation = this.page.locator("//b[text() = 'Enter Account Information']");
        this.title = this.page.locator("//input[@value = 'Mrs']");
        this.password = this.page.locator("//input[@id = 'password']");
        this.days = this.page.locator("//select[@name = 'days']");
        this.months = this.page.locator("//select[@name = 'months']");
        this.years = this.page.locator("//select[@name = 'years']");
        this.newsLetters = this.page.locator("//input[@id = 'newsletter']");
        this.recieveSpecialOffers = this.page.locator("//label[text() = 'Receive special offers from our partners!']");
        this.firstName = this.page.locator("//input[@id = 'first_name']");
        this.lastName = this.page.locator("//input[@id = 'last_name']");
        this.company = this.page.locator("//input[@id = 'company']");
        this.address1 = this.page.locator("//input[@id = 'address1']");
        this.address2 = this.page.locator("//input[@id = 'address2']");
        this.state = this.page.locator("//input[@id = 'state']");
        this.city = this.page.locator("//input[@id = 'city']");
        this.zipcode = this.page.locator("//input[@id = 'zipcode']");
        this.mobile = this.page.locator("//input[@id = 'mobile_number']");
        this.createAccount = this.page.locator("//button[text() = 'Create Account']");
        this.accountCreatedMessage = this.page.locator("//b[text() = 'Account Created!']");
        this.continueInCreatedAccount = this.page.locator("//a[text() = 'Continue']");
        this.accountVerification = this.page.locator("//a[text() = ' Logged in as ']//b");
        this.deleteAccount = this.page.locator("//a[text() = ' Delete Account']");
        this.deletedAccountVerification = this.page.locator("//b[text() = 'Account Deleted!']");
        this.continueInDeleteAccount = this.page.locator("//a[text() = 'Continue']");
        this.loginEmailField = this.page.locator("//input[@type = 'password']//preceding-sibling::input[@type = 'email']");
        this.passwordForLogin = this.page.locator("//input[@type = 'password']");
        this.loginButton = this.page.locator("//button[text() = 'Login']");
        this.loginVerification = this.page.locator("//h2[text() = 'Login to your account']");
        this.logoutButton = this.page.locator("//a[contains(text(),'Logout')]");
    }
    
    async signUpNewUser(){
        await this.signUpLogin.click();
        await this.page.waitForLoadState();
        await this.name.fill(constants.userName);
        await this.emailField.fill(this.userGmail);
        await this.signUpButton.click();
        await this.page.waitForLoadState();

    }
    async userLogin(){
        await this.signUpLogin.click();
        await this.page.waitForLoadState();
        await this.loginEmailField.fill(this.userGmail);
        //console.log(this.userGmail);
        await this.passwordForLogin.fill(constants.password);
        await this.loginButton.click();
    }
    async registerationDetails(){
        await this.title.click();
        await this.password.fill(constants.password);
        await this.days.selectOption(constants.day);
        await this.months.selectOption(constants.month);
        await this.years.selectOption(constants.year);
        await this.newsLetters.click();
        await this.recieveSpecialOffers.click();
        await this.firstName.fill(constants.userName);
        await this.lastName.fill(constants.lastName);
        await this.company.fill(constants.company);
        await this.address1.fill(constants.address1);
        await this.address2.fill(constants.address2);
        await this.state.fill(constants.state);
        await this.city.fill(constants.city);
        await this.zipcode.fill(constants.zipcode);
        await this.mobile.fill(constants.mobileNumber);
        await this.createAccount.click();
        await expect(this.accountCreatedMessage).toBeVisible();
        await this.continueInCreatedAccount.click();
        await expect(this.accountVerification).toHaveText(constants.userName);
        
    }
    async logoutMethod(){
        await this.logoutButton.click();
    }
    async deleteNewAccount(){
        await this.deleteAccount.click();
        await expect(this.deletedAccountVerification).toBeVisible();
        await this.continueInDeleteAccount.click();
    }

}

module.exports = { SignUpAndLogin };