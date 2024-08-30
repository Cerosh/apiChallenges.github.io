import { expect, test } from "./base";

test("GET Forbidden (403)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./secret/note", {
    headers: {
      "X-AUTH-TOKEN": "playwright",
    },
  });
  expect(response.status()).toBe(403);
});
