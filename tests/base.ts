import { test as base, expect } from "@playwright/test";
import { requestWithHeader } from "../utils/request.helper";

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

export { test, expect };
