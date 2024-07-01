import { chromium, test } from "@playwright/test"

test("login test demo", async () => {

const browser = await chromium.launch({
    headless: false
});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.formalink.co.nz/");
await page.click("//a[contains(text(),'Sign in')]")
await page.fill("(//input[contains(@class,'flex h-10')])[1]","chandanigaurav.rkc@gmail.com");
await page.fill("(//input[contains(@class,'flex h-10')])[2]","Gaurav@90");
await page.click("//button[@type='submit']");
await page.waitForTimeout(5000);

const newContext = await browser.newContext();
const page1 = await newContext.newPage();
await page1.goto("https://www.formalink.co.nz/");

await page1.waitForTimeout(5000);
})