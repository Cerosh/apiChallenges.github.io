import { expect, test } from "./base";
test.describe("POST Unauthorised", () => {
  test("54.remove the X-AUTH-TOKEN header", async ({
    requestWithHeader,
    page,
  }, testInfo) => {
    const noteResponse = await requestWithHeader("post", "./secret/note", {
      data: {
        note: "Playwright is good for api testing",
      },
    });
    expect(noteResponse.status()).toBe(401);
    await expect(page).toBeSuccessful(testInfo);
  });
  test("55.Invalid AUTH TOKEN header", async ({
    requestWithHeader,
    page,
  }, testInfo) => {
    const noteResponse = await requestWithHeader("post", "./secret/note", {
      headers: {
        "X-AUTH-TOKEN": "playwright",
      },
      data: {
        note: "Playwright is good for api testing",
      },
    });
    expect(noteResponse.status()).toBe(403);
    await expect(page).toBeSuccessful(testInfo);
  });
});
