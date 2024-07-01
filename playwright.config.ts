import type { PlaywrightTestConfig } from "@playwright/test";
import { dot } from "node:test/reporters";
import { json } from "stream/consumers";

const config: PlaywrightTestConfig = {
  testMatch: ["tests/jquerydd.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/reports.json",
      },
    ],
    ["html", { open: "never" }],
  ],
};

export default config;
