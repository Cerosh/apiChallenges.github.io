import { test, expect } from "@playwright/test";
import { todoGenerator } from "../utils/todo";

test("GET /todos (200) ? filter", async ({ request }) => {
  test.step("Create a 'done' todo", async () => {
    await request.post("./todos", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
      data: todoGenerator.generateTodo(1),
    });
  });
  test.step("Create a 'not done' todo", async () => {
    await request.post("./todos", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
      data: todoGenerator.generateTodo(0),
    });
  });
  const response = await request.get("./todos?doneStatus=true", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  await expect(response).toBeOK();
});
