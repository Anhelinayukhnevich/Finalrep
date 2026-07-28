import "dotenv/config";

export const env = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.TEST_USERNAME!,
  password: process.env.TEST_PASSWORD!,
  apiBaseUrl: process.env.API_BASE_URL!,
};