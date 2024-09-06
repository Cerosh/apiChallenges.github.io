import { expect, Page } from "@playwright/test";
import config from "../playwright.config";

export default class AssertHelper {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  private extractChallengeId(title: string): string {
    const dotIndex = title.indexOf(".");
    if (dotIndex === -1) {
      throw new Error("Dot not found in the string");
    }
    return title.substring(0, dotIndex);
  }
  expectTheApiChallenge = async (title: string) => {
    const baseURL = config.use?.baseURL;
    const token = process.env.TOKEN;
    if (!token) {
      throw new Error("Token is not defined in the environment variables");
    }
    await this.page.goto(`${baseURL}/gui/challenges/${token}`);
    const id = this.extractChallengeId(title);
    const child = this.page.getByRole("cell", { name: id, exact: true });
    try {
      const className = await this.page
        .getByRole("row")
        .filter({ has: child })
        .getAttribute("class");
      expect(className, title).toBe("statustrue");
    } catch {
      const textContent = await this.page
        .getByRole("row")
        .filter({ has: child })
        .textContent();
      console.log(textContent);
      await this.page.screenshot({ path: "screenshot.png", fullPage: true });
      throw new Error(" UI Assertiong failed");
    }
  };
}
