import { test, expect } from "./base";

test("GET /todos (406) Invalid Accept", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/gzip",
    },
  });
  expect(response.status()).toBe(406);
});
