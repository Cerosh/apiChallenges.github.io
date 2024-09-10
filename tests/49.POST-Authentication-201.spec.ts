import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("49.POST Authentication (201)", async ({
  requestWithHeader,
  page,
}, testInfo) => {
  const authHeader = createBasicAuthHeader("admin");
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  await expect(response).toBeOK();
  await expect(page).toBeSuccessful(testInfo);
});
