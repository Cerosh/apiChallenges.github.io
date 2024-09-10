import { test, expect } from "./base";
interface Todo {
  id: number;
  title: string;
  doneStatus: boolean;
  description: string;
}

interface TodosResponse {
  todos: Todo[];
}
test("05.GET /todos/{id} (200)", async ({
  requestWithHeader,
  page,
}, testInfo) => {
  const response = await requestWithHeader("get", "./todos");
  const data: TodosResponse = await response.json();
  const todos = data.todos;
  if (todos.length === 0) {
    throw new Error("No todos available");
  }
  const randomIndex = Math.floor(Math.random() * todos.length);
  const todoResponse = await requestWithHeader(
    "get",
    `./todos/${todos[randomIndex].id}`
  );
  await expect(todoResponse).toBeOK();
  await expect(page).toBeSuccessful(testInfo);
});
