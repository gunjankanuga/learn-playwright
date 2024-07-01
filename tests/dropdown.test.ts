import test from "@playwright/test";

test("alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  //await page.selectOption("#select-demo", {
  //label: "Monday",
  //value: "Friday",
  //index: 5,
  //});
  //await page.waitForTimeout(5000);

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
