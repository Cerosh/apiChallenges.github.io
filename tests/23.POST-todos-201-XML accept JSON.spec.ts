import { expect, test } from "@playwright/test";
import { todoGenerator } from "../utils/todo";

test("POST todos create with XML accept JSON(201)", async ({ request }) => {
  const response = await request.post("./todos", {
    data: todoGenerator.generateTodoXML(),
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      Accept: "application/json",
      "Content-Type": "application/xml",
    },
  });

  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
});
