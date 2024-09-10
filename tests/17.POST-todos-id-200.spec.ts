import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("17.POST /todos/id (200)", async ({
  requestWithHeader,
  page,
}, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
  });
  const todoResponse: todoGenerator.Todo = await response.json();
  const { id, title } = todoResponse;
  const updatedTitle = `${title}-UPDATED`;
  const updatedResponse = await requestWithHeader("post", `./todos/${id}`, {
    data: {
      title: updatedTitle,
    },
  });
  const updatedResponseJson = await updatedResponse.json();
  const { title: updatedTitleFromResponse } = updatedResponseJson;
  await expect(updatedResponse).toBeOK();
  expect(updatedTitleFromResponse).toBe(updatedTitle);
  await expect(page).toBeSuccessful(testInfo);
});
