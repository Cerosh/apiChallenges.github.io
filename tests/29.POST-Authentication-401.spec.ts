import { expect, test } from "@playwright/test";
import { createBasicAuthHeader } from "../utils/auth";

test("POST Authentication (401)", async ({ request }) => {
  const username = "Admin1";
  const password = "Pa55word";
  const authHeader = createBasicAuthHeader(username, password);
  const response = await request.post("./secret/token", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      Authorization: authHeader,
    },
  });
  expect(response.status()).toBe(401);
});
