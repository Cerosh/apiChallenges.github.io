import { test, expect } from "./base";

test("26.GET /todos (200) JSON", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/json",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
