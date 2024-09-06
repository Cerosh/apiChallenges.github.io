import { test, expect } from "./base";
test("24.OPTIONS /todos (200)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("fetch", "./todos", {
    method: "OPTIONS",
  });
  await expect(response).toBeOK();
  const { allow } = response.headers();
  expect(allow).toContain("OPTIONS");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
