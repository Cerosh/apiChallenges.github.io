import { test, expect } from "@playwright/test";

test.describe("Status Code Challenges:", () => {
  test("25.DELETE not allowed", async ({ request }) => {
    const response = await request.delete("./heartbeat", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
    });
    expect(response.status()).toBe(405);
  });
  test("26. PATCH  Internal Server Error", async ({ request }) => {
    const response = await request.patch("./heartbeat", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
    });
    expect(response.status()).toBe(500);
  });
  test("27. TRACE  Not Implemented", async ({ request }) => {
    const response = await request.fetch("./heartbeat", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
      method: "TRACE",
    });
    expect(response.status()).toBe(501);
  });
  test("28. GET 204", async ({ request }) => {
    const response = await request.get("./heartbeat", {
      headers: {
        "X-CHALLENGER": "8d7990f8-61da-4146-abde-b42bad1daac9",
      },
    });
    expect(response.status()).toBe(204);
  });
});
