import { expect, test } from "./base";

test("GET Unauthorized  (401)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./secret/note");
  expect(response.status()).toBe(401);
});
