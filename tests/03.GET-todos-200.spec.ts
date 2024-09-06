import { test, expect } from "./base";

test("03.GET /todos (200)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos");
  await expect(response).toBeOK();
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
