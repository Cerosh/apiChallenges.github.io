import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("POST /todos (201)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
  });
  await expect(response).toBeOK();
});
