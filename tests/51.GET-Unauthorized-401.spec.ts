import { expect, test } from "./base";

test("51.GET Unauthorized  (401)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./secret/note");
  expect(response.status()).toBe(401);
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
