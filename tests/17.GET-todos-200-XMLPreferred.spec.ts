import { test, expect } from "./base";

test("GET /todos (200) XML Preferred ", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./todos", {
    headers: {
      Accept: "application/xml,application/json",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/xml");
});
