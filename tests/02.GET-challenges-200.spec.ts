import { expect, test } from "./base";
test("02.GET /challenges (200)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./challenges");
  await expect(response).toBeOK();
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
