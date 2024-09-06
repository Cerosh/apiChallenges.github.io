import { expect, test } from "./base";

test("50.GET Forbidden (403)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./secret/note", {
    headers: {
      "X-AUTH-TOKEN": "playwright",
    },
  });
  expect(response.status()).toBe(403);
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
