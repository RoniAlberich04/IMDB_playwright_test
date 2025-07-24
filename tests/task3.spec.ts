import { test, expect } from '@playwright/test';
import { ImdbPage } from '../pages/IMDBPage';

test.describe('Task 3: Random Article Internal Links', () => {
  let imdbPage: ImdbPage;

  test.beforeEach(async ({ page }) => {
    imdbPage = new ImdbPage(page);
    await imdbPage.navigate();
  });

  test('Check if article contains at least one internal link', async () => {
    await expect(await imdbPage.getInternalLinksCount()).toBeGreaterThan(0);
  });
});