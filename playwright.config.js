import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  timeout: 100000,
  expect: {
    timeout: 100000,
  },
  reporter: [['html', { open: 'never' }],['allure-playwright']],
 
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    // video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */

});
 
