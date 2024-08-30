import { test, expect } from "./base";
import { todoGenerator } from "../utils/todo";
test("POST /todos (400)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo("hello"),
  });
  expect(response.status()).toBe(400);
});
