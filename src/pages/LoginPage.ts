import type { Page } from '@playwright/test';

const baseUrl = process.env.BASE_URL!;

export class LoginPage {

    constructor(private page: Page) {}

    getPage() {
        return this.page;
    }

    async open() {
        await this.page.goto(baseUrl);
    }

    async login(username: string, password: string) {
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#login-button').click();
    }
}