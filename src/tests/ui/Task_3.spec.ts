import { test, expect } from '@playwright/test';  
import { LoginPage } from '../../pages/LoginPage.js';
import { users } from '../../test-data/users.js';


test('Login to SauceDemo as standard user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.standardUser.username, users.standardUser.password);                         

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
});
    