import { expect, test } from "@playwright/test"

test("sum", async ({ page }) => {
   await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
   const sum1input = page.locator("#sum1");
   const sum2input = page.locator("#sum2");
   const getvalue = page.locator("form#gettotal>button");
   let numb1 = 200;
   let numb2 = 100;
   await sum1input.type("" + numb1);
   await sum2input.type("" + numb2);
   await getvalue.click();
   const result = page.locator("#addmessage");
   console.log(await result.textContent());
   let expectedResult = numb1 + numb2;
   //expect(result).toHaveText("" +expectedResult);

})