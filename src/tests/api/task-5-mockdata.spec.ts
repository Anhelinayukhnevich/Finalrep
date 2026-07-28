import "dotenv/config";
import { test, expect } from '@playwright/test';
import { usersMockData } from '../../test-data/users-mock-data.js';
import { endpoints } from "../../constans/endpoints.js";

const getAllUsersEndpoint = `${process.env.API_BASE_URL}${endpoints.users.getAllUsers}`;

test('GET /users returns mock data', async ({page}) => {
    await page.route(
        getAllUsersEndpoint, 
        async (route) => { 
            
            await route.fulfill({status: 200, 
            contentType: 'application/json',
            body: JSON.stringify(usersMockData)
        });
    });

    const [response] = await Promise.all([
        page.waitForResponse(getAllUsersEndpoint),
        page.goto(getAllUsersEndpoint)
    ]);
    expect (response?.status()).toBe(200);
    const responseBody = await response?.json();
    console.log('Response body:', responseBody);
    expect(responseBody[0].name).toBe('Mock User');
});

