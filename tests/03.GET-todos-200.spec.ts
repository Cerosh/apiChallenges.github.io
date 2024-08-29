import { test, expect } from "@playwright/test";

test("GET /todos (200)", async ({ request }) => {
  const response = await request.get("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  await expect(response).toBeOK();
});
