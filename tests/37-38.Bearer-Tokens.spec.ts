import { expect, test } from "@playwright/test";
import { createBasicAuthHeader } from "../utils/auth";

test("GET Authorized (Bearer)", async ({ request }) => {
  const username = "admin";
  const password = "password";
  const authHeader = createBasicAuthHeader(username, password);
  const response = await request.post("./secret/token", {
    headers: {
      Authorization: authHeader,
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  const headers = response.headers();
  const xAuthToken = headers["x-auth-token"];
  const noteResponse = await request.get("./secret/note", {
    headers: {
      Authorization: `Bearer ${xAuthToken}`,
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  expect(noteResponse).toBeOK();
});
