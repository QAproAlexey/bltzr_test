import { PlaywrightTestConfig } from '@playwright/test';
import { timeouts } from './helpers/timeouts';

const config: PlaywrightTestConfig = {
  globalTimeout: timeouts.globalTestsTimeout,
  timeout: timeouts.testTimeout,
  retries: 0,
  reporter: 'list',
  testDir: './tests',
  outputDir: './test-results',
  globalSetup: './setup/globalSetup.ts',

  use: {
    baseURL: 'https://app.bltzr.gg/',
    browserName: 'chromium',
    viewport: { width: 1400, height: 700 },
    headless: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: timeouts.mediumTimeout,
    navigationTimeout: timeouts.mediumTimeout,
  },
  expect: {
    timeout: timeouts.mediumTimeout,
  }

};

export default config;