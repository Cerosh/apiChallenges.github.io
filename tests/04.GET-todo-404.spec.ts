import { test, expect } from "@playwright/test";

test("GET /todo (404) not plural", async ({ request }) => {
  const response = await request.get("./todo", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  expect(response.status()).toBe(404);
});
