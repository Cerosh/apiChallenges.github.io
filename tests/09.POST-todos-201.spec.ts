import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("09.POST /todos (201)", async ({ requestWithHeader, page }, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
  });
  await expect(response).toBeOK();
  await expect(page).toBeSuccessful(testInfo);
});
