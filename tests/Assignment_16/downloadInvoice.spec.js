const { test , expect } = require("@playwright/test");
const { DownloadInvoice } = require("../../pageObjects/downloadInvoice");
const { AddProductsToCart } = require("../../pageObjects/addProductsToCart");
const { SignUpAndLogin } = require("../../pageObjects/signUpAndLogin");
const constants = require("../../utils/inputData/constants.json")

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});

test.describe("SignUp to download Incoice", () => {
    test("Verify downloaded invoice", async( { page }) =>{
        const addToCart = new AddProductsToCart(page);
        const proceed = new DownloadInvoice(page);
        const signup = new SignUpAndLogin(page);
        await test.step("add products to cart", async() =>{
            await addToCart.addingProducts();
        });
        await test.step("proceed to checkout and sign up", async() =>{
            await proceed.proceedMethodAndSignup();
        });
        await test.step("signup", async() =>{
            await signup.signUpNewUser();
            await signup.registerationDetails();
        });
        await test.step("proceed to checkout and validate details", async() =>{
            await proceed.proceedToCheckOut();
        });
        await test.step("Verify address details", async() =>{
            await proceed.verifyAddressDetails();
        });
        await test.step("Review Product details",async() =>{
            await proceed.verifyOrderDetails();
        });
        await test.step("Enter details for invoice and download it", async() =>{
            await proceed.fillDetailsForInvoice();
        });
        await test.step("Delete Account", async() =>{
            await signup.deleteNewAccount();
        });
        
    });
});
   

