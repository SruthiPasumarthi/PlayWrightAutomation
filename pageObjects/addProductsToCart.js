const{ expect } = require('@playwright/test');

class AddProductsToCart{
    constructor(page){
        this.page = page;
        this.productsMenu = this.page.locator("//a[contains(text() , 'Products')]");
        this.productOne = this.page.locator("//a[@data-product-id= '1' ]").first();
        this.productOneStartingPrice = (this.page.locator("//a[@data-product-id= '1' ]//preceding-sibling::h2").first()).textContent();
        this.addToCartOne = this.page.locator("//a[@data-product-id= '1'  and text() = 'Add to cart' ]").first();
        this.productTwo = this.page.locator("//a[@data-product-id= '2']").first();
        this.productTwoStartingPrice = (this.page.locator("//a[@data-product-id= '2' ]//preceding-sibling::h2").first()).textContent();
        this.addToCartTwo = this.page.locator("//a[@data-product-id= '2'  and text() = 'Add to cart' ]").first();
        this.continueShopping = this.page.locator("//button[text() = 'Continue Shopping']");
        this.cartMenu = this.page.locator("//a[contains(text() , 'Cart')]");
        this.countOfProducts = this.page.locator("td.cart_product");
        this.productOneCartPrice = this.page.locator("//tr[@id = 'product-1']//td[@class = 'cart_price']//p").textContent();
        this.productTwoCartPrice = this.page.locator("//tr[@id = 'product-2']//td[@class = 'cart_price']").textContent();
        this.quantityOfFirstProduct = this.page.locator("//tr[@id = 'product-1']//td[@class = 'cart_quantity']//button").textContent();
        this.quantityOfSecondProduct = this.page.locator("//tr[@id = 'product-2']//td[@class = 'cart_quantity']//button").textContent();
        this.TotalPriceOfProductOne = this.page.locator("//tr[@id = 'product-1']//td[@class = 'cart_total']//p").textContent();
        this.TotalPriceOfProductTwo = this.page.locator("//tr[@id = 'product-2']//td[@class = 'cart_total']//p").textContent();
        
    }
    async addingProducts(){
        await this.productsMenu.click();
        await this.page.waitForLoadState();
        await this.productOne.hover();
        await this.addToCartOne.click();
        await this.continueShopping.click();
        await this.productTwo.hover();
        await this.addToCartTwo.click();
        await this.continueShopping.click();
        await this.cartMenu.click();
        await this.page.waitForLoadState();
    }
}

module.exports = { AddProductsToCart };