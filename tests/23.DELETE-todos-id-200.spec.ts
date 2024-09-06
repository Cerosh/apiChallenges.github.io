import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("23.DELETE /todos/id (200)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
  });
  const todoResponse: todoGenerator.Todo = await response.json();
  const { id } = todoResponse;
  const deletedResponse = await requestWithHeader("delete", `./todos/${id}`);
  await expect(deletedResponse).toBeOK();
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
