import { expect, test } from "./base";
test.describe("POST Unauthorised", () => {
  test("35.remove the X-AUTH-TOKEN header", async ({ requestWithHeader }) => {
    const noteResponse = await requestWithHeader("post", "./secret/note", {
      data: {
        note: "Playwright is good for api testing",
      },
    });
    expect(noteResponse.status()).toBe(401);
  });
  test("36.Invalid AUTH TOKEN header", async ({ requestWithHeader }) => {
    const noteResponse = await requestWithHeader("post", "./secret/note", {
      headers: {
        "X-AUTH-TOKEN": "playwright",
      },
      data: {
        note: "Playwright is good for api testing",
      },
    });
    expect(noteResponse.status()).toBe(403);
  });
});
