import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("POST Amend(200)", async ({ requestWithHeader }) => {
  const username = "admin";
  const password = "password";
  const authHeader = createBasicAuthHeader(username, password);
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  const headers = response.headers();
  const xAuthToken = headers["x-auth-token"];
  const noteResponse = await requestWithHeader("post", "./secret/note", {
    headers: {
      "X-AUTH-TOKEN": xAuthToken,
    },
    data: {
      note: "Playwright is good for api testing",
    },
  });
  expect(noteResponse).toBeOK();
});
