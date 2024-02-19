import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('#header')).toContainText('Home');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Sruthi');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('pvsruthi28@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Test@123');
  await page.locator('#days').selectOption('4');
  await page.locator('#months').selectOption('3');
  await page.locator('#years').selectOption('2017');
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from').check();
  await page.getByLabel('First name *').click();
  await page.getByLabel('First name *').fill('Sruthi');
  await page.getByLabel('Last name *').click();
  await page.getByLabel('Last name *').fill('Pasumarthi');
  await page.getByLabel('Company', { exact: true }).click();
  await page.getByLabel('Company', { exact: true }).fill('test');
  await page.getByLabel('Address * (Street address, P.').click();
  await page.getByLabel('Address * (Street address, P.').fill('testing');
  await page.getByLabel('Address 2').click();
  await page.getByLabel('Address 2').fill('tested');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').press('CapsLock');
  await page.getByLabel('State *').fill('t');
  await page.getByLabel('State *').press('CapsLock');
  await page.getByLabel('State *').fill('telangana');
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('hitech city');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('500081');
  await page.getByLabel('Mobile Number *').click();
  await page.getByLabel('Mobile Number *').fill('9898989898');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByText('Logged in as Sruthi')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});