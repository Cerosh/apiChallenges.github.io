export function createBasicAuthHeader(
  username: string,
  password: string
): string {
  const credentials = `${username}:${password}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  return `Basic ${encodedCredentials}`;
}
export function createBearerAuthHeader(
  username: string,
  password: string
): string {
  const credentials = `${username}:${password}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  return `Bearer ${encodedCredentials}`;
}
