import { test, expect } from '@playwright/test';  
import { LoginPage } from '../../pages/LoginPage.js';
import { users } from '../../test-data/users.js';

test('successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);
});

test('unsuccessful login with locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);  
    await loginPage.open();
    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    await expect(page).toHaveURL(/saucedemo/);
});
                