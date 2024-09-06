import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("32.POST todos create with JSON(201)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/json");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
