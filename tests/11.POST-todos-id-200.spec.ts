import { expect, test } from "@playwright/test";
import { todoGenerator } from "../utils/todo";

test("POST /todos/id (200)", async ({ request }) => {
  const response = await request.post("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
    data: todoGenerator.generateTodo(),
  });
  const todoResponse: todoGenerator.Todo = await response.json();
  const { id, title } = todoResponse;
  const updatedTitle = `${title}-UPDATED`;
  const updatedResponse = await request.post(`./todos/${id}`, {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
    data: {
      title: updatedTitle,
    },
  });
  const updatedResponseJson = await updatedResponse.json();
  const { title: updatedTitleFromResponse } = updatedResponseJson;
  await expect(updatedResponse).toBeOK();
  expect(updatedTitleFromResponse).toBe(updatedTitle);
});
