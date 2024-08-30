import { test, expect } from "./base";
import { todoGenerator } from "../utils/todo";

test("GET /todos (200) ? filter", async ({ requestWithHeader }) => {
  test.step("Create a 'done' todo", async () => {
    await requestWithHeader("post", "./todos", {
      data: todoGenerator.generateTodo(1),
    });
  });
  test.step("Create a 'not done' todo", async () => {
    await requestWithHeader("post", "./todos", {
      data: todoGenerator.generateTodo(0),
    });
  });
  const response = await requestWithHeader("get", "./todos?doneStatus=true");
  await expect(response).toBeOK();
});
