import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("POST Authentication (401)", async ({ requestWithHeader }) => {
  const username = "Admin1";
  const password = "Pa55word";
  const authHeader = createBasicAuthHeader(username, password);
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  expect(response.status()).toBe(401);
});
