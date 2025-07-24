import { Page, Locator } from '@playwright/test';

class ImdbPage {
    readonly page: Page;
    readonly titleHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        // Локатор для заголовка фильма на странице
        this.titleHeader = page.locator('h1[data-testid="hero__pageTitle"]');
    }

    // Переход на страницу фильма
    async navigate(): Promise<void> {
        await this.page.goto('https://www.imdb.com/title/tt6604188/');
    }

    // Проверка видимости заголовка
    async isTitleVisible(): Promise<boolean> {
        return await this.titleHeader.isVisible();
    }

    // Получение количества параграфов с текстом
    async getParagraphsCount(): Promise<number> {
        // Локатор для всех параграфов на странице
        const paragraphs = this.page.locator('p:not(:empty)');
        return await paragraphs.count();
    }

    // Получение количества внутренних ссылок
    async getInternalLinksCount(): Promise<number> {
        // Локатор для всех ссылок, начинающихся с https://www.imdb.com
        const internalLinks = this.page.locator('a[href^="https://www.imdb.com"]');
        return await internalLinks.count();
    }
}

export { ImdbPage };