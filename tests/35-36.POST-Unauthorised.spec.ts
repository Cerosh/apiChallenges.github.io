import { expect, test } from "@playwright/test";
test.describe("POST Unauthorised", () => {
  test("35.remove the X-AUTH-TOKEN header", async ({ request }) => {
    const noteResponse = await request.post("./secret/note", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
      data: {
        note: "Playwright is good for api testing",
      },
    });
    expect(noteResponse.status()).toBe(401);
  });
  test("36.Invalid AUTH TOKEN header", async ({ request }) => {
    const noteResponse = await request.post("./secret/note", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
        "X-AUTH-TOKEN": "playwright",
      },
      data: {
        note: "Playwright is good for api testing",
      },
    });
    expect(noteResponse.status()).toBe(403);
  });
});
