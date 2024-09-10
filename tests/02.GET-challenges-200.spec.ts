import { expect, test } from "./base";
test("02.GET /challenges (200)", async ({
  page,
  requestWithHeader,
}, testInfo) => {
  const response = await requestWithHeader("get", "./challenges");
  await expect(response).toBeOK();
  await expect(page).toBeSuccessful(testInfo);
});
