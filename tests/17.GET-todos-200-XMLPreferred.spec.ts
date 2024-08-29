import { test, expect } from "@playwright/test";

test("GET /todos (200) XML Preferred ", async ({ request }) => {
  const response = await request.get("./todos", {
    headers: {
      "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      Accept: "application/xml,application/json",
    },
  });
  const headers = response.headers();
  await expect(response).toBeOK();
  expect(headers["content-type"]).toContain("application/xml");
});
