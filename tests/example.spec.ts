import { test, expect } from '@playwright/test';

test('Mikaila', async ({ page }) => {

  await page.goto('http://66.66.66.77:3010/login');
  await page.locator('#email').fill('mikaila.qa+su@sutherlandglobal.com');
  await page.locator('#password').fill('Atmecs@123456789');
  await page.locator('[type="submit"]').click();
  await page.pause();


});

