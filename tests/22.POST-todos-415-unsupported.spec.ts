import { expect, test } from "@playwright/test";
import { todoGenerator } from "../utils/todo";

test("POST todos create with unsupported(415)", async ({ request }) => {
  const response = await request.post("./todos", {
    data: todoGenerator.generateTodo(),
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      Accept: "*/*",
      "Content-Type": "playwright",
    },
  });

  expect(response.status()).toBe(415);
});
