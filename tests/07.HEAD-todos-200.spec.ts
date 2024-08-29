import { expect, test } from "@playwright/test";
test("HEAD /todos (200)", async ({ request }) => {
  const response = await request.head("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
    },
  });
  await expect(response).toBeOK();
});
