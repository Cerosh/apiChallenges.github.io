import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("49.POST Authentication (201)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const authHeader = createBasicAuthHeader("admin");
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  await expect(response).toBeOK();
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
