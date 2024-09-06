import { expect, test } from "./base";
import { todoGenerator } from "../utils/todo";

test("31.POST todos create with XML(201)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const response = await requestWithHeader("post", "./todos", {
    data: todoGenerator.generateTodoXML(),
    headers: {
      Accept: "application/xml",
      "Content-Type": "application/xml",
    },
  });

  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/xml");
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
