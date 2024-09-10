import { test, expect } from "./base";

test.describe("Status Code Challenges:", () => {
  test("41.DELETE not allowed", async ({
    requestWithHeader,
    page,
  }, testInfo) => {
    const response = await requestWithHeader("delete", "./heartbeat");
    expect(response.status()).toBe(405);
    await expect(page).toBeSuccessful(testInfo);
  });
  test("42.PATCH  Internal Server Error", async ({
    requestWithHeader,
    page,
  }, testInfo) => {
    const response = await requestWithHeader("patch", "./heartbeat");
    expect(response.status()).toBe(500);
    await expect(page).toBeSuccessful(testInfo);
  });
  test("43.TRACE  Not Implemented", async ({
    requestWithHeader,
    page,
  }, testInfo) => {
    const response = await requestWithHeader("fetch", "./heartbeat", {
      method: "TRACE",
    });
    expect(response.status()).toBe(501);
    await expect(page).toBeSuccessful(testInfo);
  });
  test("44.GET 204", async ({ requestWithHeader, page }, testInfo) => {
    const response = await requestWithHeader("get", "./heartbeat");
    expect(response.status()).toBe(204);
    await expect(page).toBeSuccessful(testInfo);
  });
});
