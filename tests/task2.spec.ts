import { test, expect } from '@playwright/test';
import { ImdbPage } from '../pages/IMDBPage';

test.describe('Task 2: Random Article Paragraphs', () => {
  let imdbPage: ImdbPage;

  test.beforeEach(async ({ page }) => {
    imdbPage = new ImdbPage(page);
    await imdbPage.navigate();
  });

  test('Check if article contains at least one paragraph with text', async () => {
    await expect(await imdbPage.getParagraphsCount()).toBeGreaterThan(0);
  });
});