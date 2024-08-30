import { test, expect } from "./base";

test.describe("Status Code Challenges:", () => {
  test("25.DELETE not allowed", async ({ requestWithHeader }) => {
    const response = await requestWithHeader("delete", "./heartbeat");
    expect(response.status()).toBe(405);
  });
  test("26. PATCH  Internal Server Error", async ({ requestWithHeader }) => {
    const response = await requestWithHeader("patch", "./heartbeat");
    expect(response.status()).toBe(500);
  });
  test("27. TRACE  Not Implemented", async ({ requestWithHeader }) => {
    const response = await requestWithHeader("fetch", "./heartbeat", {
      method: "TRACE",
    });
    expect(response.status()).toBe(501);
  });
  test("28. GET 204", async ({ requestWithHeader }) => {
    const response = await requestWithHeader("get", "./heartbeat");
    expect(response.status()).toBe(204);
  });
});
