import { test, expect } from "./base";

test.describe("Status Code Challenges:", () => {
  test("41.DELETE not allowed", async ({
    requestWithHeader,
    assertHelper,
  }, testInfo) => {
    const response = await requestWithHeader("delete", "./heartbeat");
    expect(response.status()).toBe(405);
    await assertHelper.expectTheApiChallenge(testInfo.title);
  });
  test("42.PATCH  Internal Server Error", async ({
    requestWithHeader,
    assertHelper,
  }, testInfo) => {
    const response = await requestWithHeader("patch", "./heartbeat");
    expect(response.status()).toBe(500);
    await assertHelper.expectTheApiChallenge(testInfo.title);
  });
  test("43.TRACE  Not Implemented", async ({
    requestWithHeader,
    assertHelper,
  }, testInfo) => {
    const response = await requestWithHeader("fetch", "./heartbeat", {
      method: "TRACE",
    });
    expect(response.status()).toBe(501);
    await assertHelper.expectTheApiChallenge(testInfo.title);
  });
  test("44.GET 204", async ({ requestWithHeader, assertHelper }, testInfo) => {
    const response = await requestWithHeader("get", "./heartbeat");
    expect(response.status()).toBe(204);
    await assertHelper.expectTheApiChallenge(testInfo.title);
  });
});
