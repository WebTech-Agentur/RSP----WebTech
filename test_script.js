const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://127.0.0.1:8080/produkte-fa.html');
  await page.waitForTimeout(2000);
  await page.screenshot({path: 'C:/Users/www.markazi.co/.gemini/antigravity/brain/f89fc3db-380b-433b-9926-899d84b06a7b/verify_rtl_products.png'});
  await browser.close();
})();
