import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("39.POST todos create with JSON accept XML(201)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodo(),
    headers: {
      Accept: "application/xml",
      "Content-Type": "application/json",
    },
  });

  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/xml");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
