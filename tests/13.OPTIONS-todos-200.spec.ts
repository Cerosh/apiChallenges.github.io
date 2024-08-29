import { test, expect } from "@playwright/test";
test("OPTIONS /todos (200)", async ({ request }) => {
  const response = await request.fetch("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
    method: "OPTIONS",
  });
  await expect(response).toBeOK();
  const { allow } = response.headers();
  expect(allow).toContain("OPTIONS");
});
