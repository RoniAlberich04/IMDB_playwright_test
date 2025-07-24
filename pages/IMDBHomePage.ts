import { Page } from '@playwright/test';

/** Главная страница IMDB */
export class ImdbMainPage {
  constructor(private page: Page) {}

  // Переход на главную страницу IMDb
  async navigate(): Promise<void> {
    await this.page.goto('https://www.imdb.com/');
  }

  // Проверка, что главная страница загрузилась (например, по наличию логотипа IMDb)
  async isPageLoaded(): Promise<boolean> {
    const logoLocator = this.page.locator('a[href="/?ref_=nv_home"]');
    return await logoLocator.isVisible();
  }
}