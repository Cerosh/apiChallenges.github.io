import { test as base, expect, TestInfo } from "@playwright/test";
import { requestWithHeader } from "../utils/request.helper";
import AssertHelper from "../utils/assert.helper";

const test = base.extend<{
  requestWithHeader: (
    method: string,
    url: string,
    options?: any
  ) => Promise<any>;
  assertHelper: AssertHelper;
}>({
  requestWithHeader: async ({ request }, use) => {
    await use((method: string, url: string, options?: any) =>
      requestWithHeader(request, method, url, options)
    );
  },
  assertHelper: async ({ page }, use) => {
    await use(new AssertHelper(page));
  },
});

export { test, expect, TestInfo };
