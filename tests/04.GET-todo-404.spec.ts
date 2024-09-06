import { test, expect } from "./base";

test("04.GET /todo (404) not plural", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todo");
  expect(response.status()).toBe(404);
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
