import { expect, test } from "@playwright/test"

test("form", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkbox1 = page.locator("id=isAgeSelected");
    expect(checkbox1).not.toBeChecked();
    await checkbox1.check();
    expect(checkbox1).toBeChecked();

})