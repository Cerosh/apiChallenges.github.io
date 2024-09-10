import { test, expect } from "./base";

test("30.GET /todos (406) Invalid Accept", async ({
  requestWithHeader,
  page,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/gzip",
    },
  });
  expect(response.status()).toBe(406);
  await expect(page).toBeSuccessful(testInfo);
});
