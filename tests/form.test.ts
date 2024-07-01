import { expect, test } from "@playwright/test"

test("form", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const inputMessage = page.locator("input#user-message");
    await inputMessage.scrollIntoViewIfNeeded();
    console.log(await inputMessage.getAttribute("placeholder"));
    console.log('Before entering data: ' + await inputMessage.inputValue());
    expect(inputMessage).toHaveAttribute("placeholder","Please enter your Message");
    console.log(await inputMessage.inputValue());
    await inputMessage.type("Hi");
    console.log('After entering data: ' + await inputMessage.inputValue());

}
)
