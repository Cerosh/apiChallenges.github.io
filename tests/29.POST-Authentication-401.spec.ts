import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("POST Authentication (401)", async ({ requestWithHeader }) => {
  const authHeader = createBasicAuthHeader("Admin1");
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  expect(response.status()).toBe(401);
});
