import { test, expect } from "@playwright/test";
test("GET /todos/{id} (404)", async ({ request }) => {
  const randomSixDigit = Math.floor(Math.random() * 900000) + 100000;
  const response = await request.get(`./todos/${randomSixDigit}`, {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  expect(response.status()).toBe(404);
});
