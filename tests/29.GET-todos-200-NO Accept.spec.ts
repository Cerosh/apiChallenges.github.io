import { test, expect } from "./base";

test("29.GET /todos (200) No Accept", async ({
  requestWithHeader,
  page,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
  await expect(page).toBeSuccessful(testInfo);
});
