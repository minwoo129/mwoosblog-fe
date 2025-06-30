import { test, expect } from '@playwright/test';

test('초기 접속이 정상적으로 이뤄지는지 여부', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/MWoo's Blog/);
});

test('초기화면에서 블로그 포스트화면으로 라우팅이 정상적으로 이뤄지는지 여부', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByTestId(/post-item-vcs-review/).click();
  await expect(page).toHaveTitle(/소스코드 형상관리의 세계/);
});
