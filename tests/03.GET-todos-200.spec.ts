import { test, expect } from "./base";

test("GET /todos (200)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./todos");
  await expect(response).toBeOK();
});
