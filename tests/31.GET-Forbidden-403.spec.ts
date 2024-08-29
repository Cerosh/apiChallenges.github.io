import { expect, test } from "@playwright/test";

test("GET Forbidden (403)", async ({ request }) => {
  const response = await request.get("./secret/note", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      "X-AUTH-TOKEN": "playwright",
    },
  });
  expect(response.status()).toBe(403);
});
