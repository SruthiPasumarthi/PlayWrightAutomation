//ts-check
const{ test, expect } = require('@playwright/test');
const { AddProductsToCart } = require("../pageObjects/addProductsToCart");
const { SignUpAndLogin } = require("../pageObjects/signUpAndLogin");


test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.waitForLoadState();
});


test.describe("Sign In and Add Products", () => {
    test("Sign In", async( {page} ) => {
        const signupWithNew = new SignUpAndLogin(page);
        await expect(signupWithNew.homeIcon,"Visible").toHaveText(" Home");
        await signupWithNew.signUpNewUser();
        await signupWithNew.registerationDetails();
        await signupWithNew.logout();
        await page.waitForLoadState();
        await expect(page.locator("//h2[text() = 'Login to your account']") , "Verify").toHaveText("Login to your account");
        await signupWithNew.userLogin();
        await expect(signupWithNew.accountVerification, "Validated login user").toHaveText(signupWithNew.userName);
        await test.step("Adding Products into Cart", async() =>{
            const addToCart = new AddProductsToCart(page);
            await addToCart.addingProducts();
            const productCountLocator = await addToCart.countOfProducts.count();
            expect(productCountLocator).toEqual(2);
            expect(addToCart.productOneStartingPrice).toEqual(addToCart.productOneCartPrice);
            expect(addToCart.productTwoStartingPrice).toEqual(addToCart.productTwoCartPrice);
            expect(await addToCart.quantityOfFirstProduct).toEqual("1");
            expect(await addToCart.quantityOfSecondProduct).toEqual("1");
            const priceOne = await addToCart.productOneStartingPrice;
            const priceTwo = await addToCart.productTwoStartingPrice
            expect(priceOne).toEqual(await addToCart.TotalPriceOfProductOne);
            expect(priceTwo).toEqual(await addToCart.TotalPriceOfProductTwo);
        });
    });

});