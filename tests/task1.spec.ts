import { test, expect } from '@playwright/test';
import { ImdbPage } from '../pages/IMDBPage'; // Убедитесь, что путь правильный

test.describe('Task 1: Article Title Visibility', () => {
  let imdbPage: ImdbPage;

  test.beforeEach(async ({ page }) => {
    imdbPage = new ImdbPage(page);
    await imdbPage.navigate();
  });

  test('Check if article title is visible', async () => {
    await expect(imdbPage.isTitleVisible()).toBeTruthy();
  });
});