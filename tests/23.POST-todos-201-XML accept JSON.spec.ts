import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("POST todos create with XML accept JSON(201)", async ({
  requestWithHeader,
}) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodoXML(),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/xml",
    },
  });

  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
});
