import { expect, test } from "@playwright/test";

test("GET Unauthorized  (401)", async ({ request }) => {
  const response = await request.get("./secret/note", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  expect(response.status()).toBe(401);
});
