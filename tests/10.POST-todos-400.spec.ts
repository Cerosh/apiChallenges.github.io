import { test, expect } from "./base";
import { todoGenerator } from "../utils/todo";
test("10.POST /todos (400)", async ({ requestWithHeader, page }, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo("hello"),
  });
  expect(response.status()).toBe(400);
  await expect(page).toBeSuccessful(testInfo);
});
