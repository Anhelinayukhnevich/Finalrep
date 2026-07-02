import "dotenv/config";
import { test, expect } from '@playwright/test'; 
import { LoginPage } from '../../pages/LoginPage.js'; 

test ('Login to SauceDemo using environment variables', async ({ page }) => {
    const username = process.env.TEST_USERNAME!;
    const password = process.env.TEST_PASSWORD!; 
    
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(username, password);      

        await expect(page).toHaveURL(/inventory/);
        await expect(page.locator('.inventory_list')).toBeVisible();
});

//JUNIOR LVL TASK 4