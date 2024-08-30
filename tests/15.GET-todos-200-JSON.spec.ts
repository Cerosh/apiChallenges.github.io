import { test, expect } from "./base";

test("GET /todos (200) JSON", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/json",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
});
