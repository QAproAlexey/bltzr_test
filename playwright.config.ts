import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalTimeout: 480000,
  timeout: 60000,
  retries: 0,
  reporter: 'list',
  testDir: './tests',
  outputDir: './test-results',
  expect: {
    timeout: 10000
  },
  use: {
    baseURL: 'https://app.bltzr.gg/',
    browserName: 'chromium',
    viewport: { width: 1400, height: 700 },
    headless: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
};

export default config;