import { expect, test } from "@playwright/test";
import { todoGenerator } from "../utils/todo";

test("POST /todos (201)", async ({ request }) => {
  const response = await request.post("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
    data: todoGenerator.generateTodo(),
  });
  await expect(response).toBeOK();
});
