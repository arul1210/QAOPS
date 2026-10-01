// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';
import { fstat } from 'node:fs';
import { permission } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//export default defineConfig({
const config = ({
  testDir: './tests',
  //testMatch: 'CostumizedFixtureForEndToEnd.spec.js',
  timeout: 30 * 1000, // we can increase the default timeout default is 3000 milli seconds
  expect: { //specific expection
  },
  reporter: 'html',

  /* Run tests in files in parallel */
  // fullyParallel: true,
  // /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  // /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  // /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  // /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects:
    [
      {
        name: 'firefox',
        use: {
          browserName: 'firefox',
          headless: false,
          screenshot: 'only-on-failure', //"on"means taking ss for each steps
          trace: 'retain-on-failure',//off to save the memories
          video: 'retain-on-failure',
          launchOptions: {
            args: [
              '--disable-save-password-bubble',
              '--disable-password-manager-reauthentication',
              '--start-maximized',
            ],
          },

        },



      },

      {
        name: 'chrome',
        use: {
          browserName: 'chromium',
          headless: false,
          screenshot: 'only-on-failure', //"on"means taking ss for each steps
          trace: 'retain-on-failure',//off to save the memories
          video: 'retain-on-failure',
         // viewport: { width: 720, height: 720 }, // costumized screen it'll help for web responsible testing
         //...devices['iPhone 15 Pro'],
         ...devices['Pixel 5 landscape'],
         permissions :['geolocation'], // if you get any location access for the browser
          ignoreHttpsErrors : true, // ignore any ssc certification issue 
          launchOptions: {
            args: [
              '--disable-save-password-bubble',
              '--disable-password-manager-reauthentication',
              '--start-maximized',
            ],
          },

        },



      }


    ]



});

module.exports = config

