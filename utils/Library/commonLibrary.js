const{ expect } = require('@playwright/test');
const { SignUpAndLogin } = require("../pageObjects/signUpAndLogin");
const constants = require("../inputData/constants.json");
const { sign } = require('crypto');

class CommonLibrary{
    constructor(page){
        this.page = page;
    }
    async commonMethods(){
        const signupWithNew = new SignUpAndLogin(this.page);
        await expect(signupWithNew.homeIcon,"Visible").toBeVisible();
        await signupWithNew.signUpNewUser();
        await signupWithNew.registerationDetails();
        await signupWithNew.logoutMethod();
        await expect(signupWithNew.loginVerification , "Verify").toHaveText("Login to your account");
        await signupWithNew.userLogin();
        await expect(signupWithNew.accountVerification, "Validated login user").toHaveText(constants.userName);
        await signupWithNew.deleteNewAccount();
    }
}

module.exports = { CommonLibrary }