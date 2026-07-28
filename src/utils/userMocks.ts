import { env } from '../config/env.js';
import { type Page } from '@playwright/test';
import { usersMockData } from '../test-data/users-mock-data.js';
import { emptyUsersMockData } from '../test-data/empty-user-mock-data.js';
import { errorUsersMockData } from '../test-data/error-user-mock-data.js';
import {getAllUsersEndpoint,} from '../utils/usersApi.js';


export async function mockGetUsersSuccess(page: Page) {
    await page.route(
        getAllUsersEndpoint,
        async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(usersMockData),
            });
        }
    );
}

// userMock empty data
export async function mockGetUsersEmpty(page: Page) {
    await page.route(
        getAllUsersEndpoint,
        async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(emptyUsersMockData),
            });
        }
    );
}

// userMock error data
export async function mockGetUsersError(page:Page) {
    await page.route(
        getAllUsersEndpoint,
        async (route) => {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify(errorUsersMockData),
            });
        }
    );
 
}





