import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Products' }).click();
    await page.locator("//a[@data-product-id= '1' ]").first().hover();
    await page.locator("//a[@data-product-id= '1'  and text() = 'Add to cart' ]").first().click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.locator("//a[@data-product-id= '2']").first().hover();
    await page.locator("//a[@data-product-id= '2'  and text() = 'Add to cart' ]").first().click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await page.getByRole('link', { name: ' Cart' }).click();
    await expect(page.locator('#product-1').getByRole('cell', { name: 'Product Image' })).toBeVisible();
    await expect(page.locator('#product-2').getByRole('cell', { name: 'Product Image' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Rs.' }).first()).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Rs.' }).nth(2)).toBeVisible();
    await expect(page.locator('#product-1').getByRole('cell', { name: '1' })).toBeVisible();
    await expect(page.locator('#product-2').getByRole('cell', { name: '1' })).toBeVisible();
    await expect(page.getByText('Rs.').nth(1)).toBeVisible();
    await expect(page.locator('#product-2')).toContainText('Rs. 400');
});