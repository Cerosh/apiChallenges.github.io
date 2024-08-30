import { APIRequestContext } from "@playwright/test";

let cachedToken: string | null = null;
let tokenGenerationTime: Date | null = null;

async function fetchChallengerToken(
  request: APIRequestContext
): Promise<string> {
  const response = await request.post(
    "https://apichallenges.herokuapp.com/challenger"
  );

  if (!response.ok()) {
    throw new Error("Failed to fetch X-CHALLENGER token");
  }
  const token = response.headers()["x-challenger"];
  cachedToken = token;
  tokenGenerationTime = new Date();
  console.log(token);
  return token;
}

function isTokenValid(): boolean {
  if (cachedToken && tokenGenerationTime) {
    const now = new Date();
    const elapsedMinutes =
      (now.getTime() - tokenGenerationTime.getTime()) / 60000;
    return elapsedMinutes < 10;
  }
  return false;
}

export async function requestWithHeader(
  request: APIRequestContext,
  method: string,
  url: string,
  options?: any
) {
  console.log(isTokenValid());
  if (!isTokenValid()) {
    await fetchChallengerToken(request);
  }
  return request[method](url, {
    ...options,
    headers: {
      ...options?.headers,
      "X-CHALLENGER": cachedToken!,
    },
  });
}
