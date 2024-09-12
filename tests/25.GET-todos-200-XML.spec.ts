import { test, expect } from "./base";

test("25.GET /todos (200) XML", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/xml",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/xml");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});