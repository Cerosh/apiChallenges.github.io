import { test, expect } from "@playwright/test";
interface Todo {
  id: number;
  title: string;
  doneStatus: boolean;
  description: string;
}

interface TodosResponse {
  todos: Todo[];
}
test("GET /todos/{id} (200)", async ({ request }) => {
  const response = await request.get("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  const data: TodosResponse = await response.json();
  const todos = data.todos;
  if (todos.length === 0) {
    throw new Error("No todos available");
  }
  const randomIndex = Math.floor(Math.random() * todos.length);
  const todoResponse = await request.get(`./todos/${todos[randomIndex].id}`, {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  await expect(todoResponse).toBeOK();
});
