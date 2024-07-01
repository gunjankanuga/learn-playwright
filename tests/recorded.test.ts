import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.formalink.co.nz/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.fill("(//input[contains(@class,'flex h-10')])[1]","chandanigaurav.rkc@gmail.com");
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('Gaurav@90');
  await page.click("//button[@type='submit']");
  await page.getByRole('button', { name: 'New Form' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('name test');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('test');
  await page.getByRole('button', { name: 'Save' }).click();
});