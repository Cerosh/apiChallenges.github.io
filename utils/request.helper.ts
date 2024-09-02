import { APIRequestContext } from "@playwright/test";

export async function requestWithHeader(
  request: APIRequestContext,
  method: string,
  url: string,
  options?: RequestInit
) {
  const token = process.env.TOKEN;
  if (!token) {
    throw new Error("Token is not defined in the environment variables");
  }
  if (
    !["get", "post", "delete", "patch", "trace", "fetch"].includes(
      method.toLowerCase()
    )
  ) {
    throw new Error("Invalid HTTP method");
  }
  return request[method](url, {
    ...options,
    headers: {
      ...options?.headers,
      "X-CHALLENGER": token,
    },
  });
}
