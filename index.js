/*
 @@@@@@@@@@@@@@@@@@
 @@ Dependencies @@
 @@@@@@@@@@@@@@@@@@
*/

const puppeteer = require(`puppeteer`);
const fs = require(`fs`);

(async () => {
  // Init non-headless chromium

  const browser = await puppeteer.launch({
    args: [`--no-sandbox`],
    headless: false,
    ignoreHTTPSErrors: true,
    userDataDir: `${__dirname}/profile-dir`,
  });
