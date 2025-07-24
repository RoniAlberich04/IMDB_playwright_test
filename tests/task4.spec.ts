import { test, expect } from '@playwright/test';
import { ImdbMainPage } from '../pages/IMDBHomePage';

test.describe('IMDb Main Page Tests', () => {
  let imdbMainPage: ImdbMainPage;

  test.beforeEach(async ({ page }) => {
    imdbMainPage = new ImdbMainPage(page);
    await imdbMainPage.navigate();
  });

  test('should open IMDb main page and verify it loaded', async () => {
    await expect(await imdbMainPage.isPageLoaded()).toBeTruthy();
  });
});