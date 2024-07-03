import { expect, test } from "@playwright/test";

test("frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const frame = page.frames();
  console.log("no of frames" + frame.length);

  await page.waitForTimeout(5000);

  //const frame1 = page.frameLocator("#firstFr");
  //await frame1.locator("input[name='fname']").fill("Gunjan");
  //await frame1.locator("input[name='lname']").fill("Kanuga");

  //expect(await frame1.locator("p.title.has-text-info").textContent()).toContain(
  //("You have entered");
  //);

  const frame2 = page.frameLocator("#firstFr");
  await frame2.locator("input[name='fname']").fill("Gunjan");
  await frame2.locator("input[name='lname']").fill("Kanuga");

  const nestFrame = frame2.frameLocator("iframe[src='innerFrame']");
  await nestFrame.locator("input[name='email']").fill("gunjan@gmail.com");
});
