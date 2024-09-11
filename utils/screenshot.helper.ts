import { Locator, Page, TestInfo } from "@playwright/test";

export async function takeScreenshot(
  locator: Locator | null,
  page: Page,
  testInfo: TestInfo
) {
  if (locator) {
    await testInfo.attach("screenshot", {
      body: await locator.screenshot(),
      contentType: "image/png",
    });
  } else {
    const screenshot = await page.screenshot({ path: "screenshot.png" });
    testInfo.attach("screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  }
}
