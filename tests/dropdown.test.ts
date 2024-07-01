import test from "@playwright/test";

test("alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#multi-select", [
    {
      label: "Florida",
    },
    {
      value: "Ohio",
    },
    {
      index: 7,
    },
  ]);
});
