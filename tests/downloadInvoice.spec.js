const { test , expect } = require("@playwright/test");
const { DownloadInvoice } = require("../pageObjects/downloadInvoice");
const { AddProductsToCart } = require("../pageObjects/addProductsToCart");
const { SignUpAndLogin } = require("../pageObjects/signUpAndLogin");

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});

test.describe("download invoice", () => {
    test("Verify downloaded invoice", async( { page }) =>{
        await test.step("add products to cart", async() =>{
            const addToCart = new AddProductsToCart(page);
            await addToCart.addingProducts();
        });
        await test.step("proceed to checkout and sign up", async() =>{
            const proceed = new DownloadInvoice(page);
            await proceed.proceedMethod();
            await test.step("signup", async() =>{
                const signup = new SignUpAndLogin(page);
                await signup.signUpNewUser();
                await signup.registerationDetails();
                

            });
        
            
        
        })
    })

})