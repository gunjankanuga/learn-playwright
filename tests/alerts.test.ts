import { expect, test } from "@playwright/test";

test("alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (alert) => {
    const alertText = alert.message();
    console.log(alertText);
    await alert.accept();
  });
  await page.locator("button:has-Text('Click Me')").nth(0).click();
});

test("alertsdailog", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (alertsdailog) => {
    const alertText = alertsdailog.message();
    console.log(alertText);
    await alertsdailog.dismiss();
  });
  await page.locator("button:has-Text('Click Me')").nth(1).click();
  expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
});

test("alertsaccept", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (alertsaccept) => {
    const alertText = alertsaccept.defaultValue();
    console.log(alertText);
    await alertsaccept.accept("Gunjan");
  });
  await page.locator("button:has-Text('Click Me')").nth(2).click();
  //expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
  expect(page.locator("id=confirm-demo")).toContainText("'Gunjan'");
});
