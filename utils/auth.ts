export function createBasicAuthHeader(username: string): string {
  const encodedCredentials = getEncodedCredentials(username);
  return `Basic ${encodedCredentials}`;
}
export function createBearerAuthHeader(username: string): string {
  const encodedCredentials = getEncodedCredentials(username);
  return `Bearer ${encodedCredentials}`;
}

function getPasswordForUser(userName: string): string {
  if (userName === "admin") {
    const password = process.env.ADMIN_USER_PASSWORD;
    if (!password) {
      throw new Error("Environment variable ADMIN_USER_PASSWORD is not set.");
    }
    return password;
  }
  return "not set";
}

function getEncodedCredentials(username: string): string {
  const password = getPasswordForUser(username);
  const credentials = `${username}:${password}`;
  return Buffer.from(credentials).toString("base64");
}
