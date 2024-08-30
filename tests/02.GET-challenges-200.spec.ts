import { expect, test } from "./base";
test("GET /challenges (200)", async ({ requestWithHeader }) => {
  const response = await requestWithHeader("get", "./challenges");
  await expect(response).toBeOK();
});
