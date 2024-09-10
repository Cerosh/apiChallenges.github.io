import { expect, test } from "./base";
test("08.HEAD /todos (200)", async ({ request, page }, testInfo) => {
  const token = process.env.TOKEN;
  if (!token) {
    throw new Error("Token is not defined in the environment variables");
  }
  const response = await request.head("./todos", {
    headers: {
      "X-CHALLENGER": token,
    },
  });

  await expect(response).toBeOK();
  await expect(page).toBeSuccessful(testInfo);
});
