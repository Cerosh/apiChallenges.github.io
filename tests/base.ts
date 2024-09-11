import {
  test as base,
  expect as baseExpect,
  Locator,
  Page,
  TestInfo,
} from "@playwright/test";
import { requestWithHeader } from "../utils/request.helper";
import { takeScreenshot } from "../utils/screenshot.helper";
import { getLocatorBasedOnTitle } from "../utils/assert.helper";

const test = base.extend<{
  requestWithHeader: (
    method: string,
    url: string,
    options?: any
  ) => Promise<any>;
}>({
  requestWithHeader: async ({ request }, use) => {
    await use((method: string, url: string, options?: any) =>
      requestWithHeader(request, method, url, options)
    );
  },
});
export const expect = baseExpect.extend({
  async toBeSuccessful(page: Page, testInfo: TestInfo) {
    let pass: boolean;
    const title: string = testInfo.title;
    let locator: Locator | null = null;
    try {
      locator = await getLocatorBasedOnTitle(page, title);
      await expect(locator, title).toHaveCSS(
        "background-color",
        "rgb(152, 251, 152)"
      );

      pass = true;
      return {
        message: () =>
          pass === true
            ? `Background verification assertion passed`
            : `Background verification assertion Failed`,
        pass,
      };
    } catch (error) {
      await takeScreenshot(locator, page, testInfo);
      return {
        message: () => `${error.message} for the test case: "${title}".`,
        pass: false,
      };
    }
  },
});
export { test, TestInfo };
