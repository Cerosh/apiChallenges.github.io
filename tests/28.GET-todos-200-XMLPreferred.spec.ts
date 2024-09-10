import { test, expect } from "./base";

test("28.GET /todos (200) XML Preferred ", async ({
  requestWithHeader,
  page,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/xml,application/json",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/xml");
  await expect(page).toBeSuccessful(testInfo);
});
