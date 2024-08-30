import { expect, test } from "./base";
import { createBasicAuthHeader } from "../utils/auth";

test("POST Authentication (201)", async ({ requestWithHeader }) => {
  const authHeader = createBasicAuthHeader("admin");
  const response = await requestWithHeader("post", "./secret/token", {
    headers: {
      Authorization: authHeader,
    },
  });
  await expect(response).toBeOK();
});
