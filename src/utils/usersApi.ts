import { type Page } from '@playwright/test';
import { env } from '../config/env.js';
import { endpoints } from '../constans/endpoints.js';



export const getAllUsersEndpoint =
    `${env.apiBaseUrl}${endpoints.users.getAllUsers}`;
    
export async function requestUsers(page: Page) {
    return page.evaluate(async (url) => {
        const response = await fetch(url);

        return {
            status: response.status,
            data: await response.json(),
        };
    }, getAllUsersEndpoint);
}