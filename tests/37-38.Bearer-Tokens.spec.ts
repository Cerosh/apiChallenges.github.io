import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("GET Authorized (Bearer)", async ({ requestWithHeader }) => {
  const authHeader = createBasicAuthHeader("admin");
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  const headers = response.headers();
  const xAuthToken = headers["x-auth-token"];
  const noteResponse = await requestWithHeader("get", "./secret/note", {
    headers: {
      Authorization: `Bearer ${xAuthToken}`,
    },
  });
  expect(noteResponse).toBeOK();
});
