const { chromium } = require("playwright");
const config = require("./playwright.config");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Каталог курсов");
  await page.pause();

  //assertion
  await browser.close();
})();