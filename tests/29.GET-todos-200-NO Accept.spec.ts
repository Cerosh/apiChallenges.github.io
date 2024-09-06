import { test, expect } from "./base";

test("29.GET /todos (200) No Accept", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
