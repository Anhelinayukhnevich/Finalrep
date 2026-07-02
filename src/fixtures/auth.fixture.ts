import "dotenv/config";
import { test as base, expect } from '@playwright/test'; 
import { LoginPage } from '../pages/LoginPage.js'
import { env } from "../config/env.js";

type LoginFixtures = {
    loginPage: LoginPage;
};          

const test = base.extend<LoginFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(
             env.username,
             env.password
        );
        await use(loginPage);
    }     
       


});
export { test, expect }