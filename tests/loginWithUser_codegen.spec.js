import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('pvsruthi28@gmail.com');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Sruthi');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('pvsruthi28@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Test@123');
  await page.locator('#days').selectOption('13');
  await page.locator('#months').selectOption('4');
  await page.locator('#years').selectOption('2012');
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from').check();
  await page.getByLabel('First name *').click();
  await page.getByLabel('First name *').fill('Sruthi');
  await page.getByLabel('Last name *').click();
  await page.getByLabel('Last name *').fill('Test');
  await page.getByLabel('Company', { exact: true }).click();
  await page.getByLabel('Company', { exact: true }).fill('Tested');
  await page.getByLabel('Address * (Street address, P.').click();
  await page.getByLabel('Address * (Street address, P.').fill('Test1');
  await page.getByLabel('Address 2').click();
  await page.getByLabel('Address 2').fill('Test2');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').fill('TestTest4');
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('Test5');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').press('ArrowLeft');
  await page.getByLabel('State *').press('ArrowLeft');
  await page.getByLabel('State *').press('ArrowLeft');
  await page.getByLabel('State *').press('ArrowLeft');
  await page.getByLabel('State *').press('ArrowLeft');
  await page.getByLabel('State *').fill('Test4');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('500081');
  await page.getByLabel('Mobile Number *').click();
  await page.getByLabel('Mobile Number *').fill('7878787878');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('pvsruthi28@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Logged in as Sruthi')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});