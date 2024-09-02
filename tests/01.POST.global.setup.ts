import { test as setup } from "@playwright/test";
import config from "../playwright.config";

setup("Fetch X-CHALLENGER token", async ({ request }) => {
  const baseURL = config.use?.baseURL;
  const response = await request.post(`${baseURL}/challenger`);
  if (!response.ok()) {
    throw new Error("Failed to fetch X-CHALLENGER token");
  }
  const token = response.headers()["x-challenger"];
  process.env.TOKEN = token;
});
