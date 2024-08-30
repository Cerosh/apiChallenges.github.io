import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("POST todos create with unsupported(415)", async ({
  requestWithHeader,
}) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
    headers: {
      Accept: "*/*",
      "Content-Type": "playwright",
    },
  });

  expect(response.status()).toBe(415);
});
