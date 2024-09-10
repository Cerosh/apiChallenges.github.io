import { test as setup, expect, TestInfo } from "./base";
import config from "../playwright.config";

setup(
  "01.Fetch X-CHALLENGER token",
  async ({ request, page }, testInfo: TestInfo) => {
    const baseURL = config.use?.baseURL;
    const response = await request.post(`${baseURL}/challenger`);
    if (!response.ok()) {
      throw new Error("Failed to fetch X-CHALLENGER token");
    }
    const token = response.headers()["x-challenger"];
    process.env.TOKEN = token;

    await expect(page).toBeSuccessful(testInfo);
  }
);
