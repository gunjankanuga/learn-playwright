import test from "@playwright/test";

test("jquery", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await page.click("#country+span");
  await page
    .locator("ul#select2-country-results")
    .locator("li", {
      hasText: "India",
    })
    .click();

  await page.waitForTimeout(5000);
});
