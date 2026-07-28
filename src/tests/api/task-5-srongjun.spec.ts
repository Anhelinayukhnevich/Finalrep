import { expect, test } from "../../fixtures/auth.fixture.js";
import { mockGetUsersEmpty, mockGetUsersError, mockGetUsersSuccess} from "../../utils/userMocks.js";
import { getAllUsersEndpoint } from '../../utils/usersApi.js';


test('GET /users returns mocked data', async ({ page }) => {

    await mockGetUsersSuccess(page);

     const [response] = await Promise.all([
            page.waitForResponse(getAllUsersEndpoint),
            page.goto(getAllUsersEndpoint)
        ]);
        expect (response?.status()).toBe(200);
        const responseBody = await response?.json();
        console.log('Response body:', responseBody);
        expect(responseBody[0].name).toBe('Mock User');
    });


test('GET /users returns empty data', async ({ page }) => {

    await mockGetUsersEmpty(page);  

    const [response] = await Promise.all([
        page.waitForResponse(getAllUsersEndpoint),
        page.goto(getAllUsersEndpoint)
    ]);

    expect (response?.status()).toBe(200);
    const responseBody = await response?.json();
    console.log('Response body:', responseBody);
    expect(responseBody).toEqual([]);
}
);


test('GET /users returns error', async ({ page }) => {
    await mockGetUsersError(page);

    const [response] = await Promise.all([
        page.waitForResponse(getAllUsersEndpoint),
        page.goto(getAllUsersEndpoint)
    ]);

    expect (response?.status()).toBe(500);

    const responseBody = await response?.json();
    console.log('Response body:', responseBody);
    expect(responseBody).toEqual({ error: 'Internal Server Error', message: 'Something went wrong. Please try again later.' });      

});






