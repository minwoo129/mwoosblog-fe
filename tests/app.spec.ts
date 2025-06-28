import {test, expect} from '@playwright/test';

test('initialize', async ({page}) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/MWoo's Blog/);
});
