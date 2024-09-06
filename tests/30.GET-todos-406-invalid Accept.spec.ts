import { test, expect } from "./base";

test("30.GET /todos (406) Invalid Accept", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/gzip",
    },
  });
  expect(response.status()).toBe(406);
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
