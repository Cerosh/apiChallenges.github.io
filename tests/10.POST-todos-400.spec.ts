import { test, expect } from "./base";
import { todoGenerator } from "../utils/todo";
test("10.POST /todos (400)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo("hello"),
  });
  expect(response.status()).toBe(400);
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
