import { test, expect } from "./base";
test("GET /todos/{id} (404)", async ({ requestWithHeader }) => {
  const randomSixDigit = Math.floor(Math.random() * 900000) + 100000;
  const response = await requestWithHeader("get", `./todos/${randomSixDigit}`);
  expect(response.status()).toBe(404);
});
