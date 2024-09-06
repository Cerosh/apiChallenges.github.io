import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("48.POST Authentication (401)", async ({
  requestWithHeader,
  assertHelper,
}, testInfo) => {
  const authHeader = createBasicAuthHeader("Admin1");
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  expect(response.status()).toBe(401);
  await assertHelper.expectTheApiChallenge(testInfo.title);
});
