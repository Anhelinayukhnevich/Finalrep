//STRONG JUNIOR LVL TASK 4
import { test, expect } from '../../fixtures/auth.fixture.js';

test('inventory page is displayed', async ({ loginPage }) => {
    await expect(loginPage.getPage()).toHaveURL(/inventory/);
});

test('shopping cart is visible on the inventory page', async ({ loginPage }) => {
    await expect(loginPage.getPage().locator('.shopping_cart_link')).toBeVisible();
});