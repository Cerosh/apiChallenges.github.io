import { expect, test } from "@playwright/test";
import { todoGenerator } from "../utils/todo";

test("DELETE /todos/id (200)", async ({ request }) => {
  const response = await request.post("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
    data: todoGenerator.generateTodo(),
  });
  const todoResponse: todoGenerator.Todo = await response.json();
  const { id } = todoResponse;
  const deletedResponse = await request.delete(`./todos/${id}`, {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  await expect(deletedResponse).toBeOK();
});
