import { test, expect } from "./base";
test("OPTIONS /todos (200)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("fetch", "./todos", {
    method: "OPTIONS",
  });
  await expect(response).toBeOK();
  const { allow } = response.headers();
  expect(allow).toContain("OPTIONS");
});
