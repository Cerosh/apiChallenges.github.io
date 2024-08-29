import { expect, test } from "@playwright/test";
import { createBasicAuthHeader } from "../utils/auth";

test("POST Amend(200)", async ({ request }) => {
  const username = "admin";
  const password = "password";
  const authHeader = createBasicAuthHeader(username, password);
  const response = await request.post("./secret/token", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      Authorization: authHeader,
    },
  });
  const headers = response.headers();
  const xAuthToken = headers["x-auth-token"];
  const noteResponse = await request.post("./secret/note", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      "X-AUTH-TOKEN": xAuthToken,
    },
    data: {
      note: "Playwright is good for api testing",
    },
  });
  expect(noteResponse).toBeOK();
});
