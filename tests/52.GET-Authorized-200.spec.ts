import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("52.GET Authorized (200)", async ({
  requestWithHeader,
  page,
}, testInfo) => {
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
      "X-AUTH-TOKEN": xAuthToken,
    },
  });
  expect(noteResponse).toBeOK();
  await expect(page).toBeSuccessful(testInfo);
});
