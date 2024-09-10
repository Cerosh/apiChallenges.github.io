import { Page } from "@playwright/test";
import config from "../playwright.config";
function extractChallengeId(title: string) {
  const dotIndex = title.indexOf(".");
  if (dotIndex === -1) {
    throw new Error("Dot not found in the string");
  }
  return title.substring(0, dotIndex);
}
export async function getLocatorBasedOnTitle(page: Page, title: string) {
  const baseURL = config.use?.baseURL;
  const token = process.env.TOKEN;
  if (!token) {
    throw new Error("Token is not defined in the environment variables");
  }
  await page.goto(`${baseURL}/gui/challenges/${token}`);
  const id = extractChallengeId(title);
  const child = page.getByRole("cell", { name: id, exact: true });
  try {
    return page.getByRole("row").filter({ has: child });
  } catch {
    throw new Error("Not able to extract the class attribute");
  }
}
