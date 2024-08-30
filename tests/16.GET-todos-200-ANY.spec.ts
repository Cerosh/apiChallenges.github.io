import { test, expect } from "./base";

test("GET /todos (200) ANY", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "*/*",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
});
