import { test, expect } from "./base";

test("GET /todo (404) not plural", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./todo");
  expect(response.status()).toBe(404);
});
