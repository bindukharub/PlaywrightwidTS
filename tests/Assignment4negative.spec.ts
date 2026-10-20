import{test,expect,Browser,chromium, Page,BrowserContext} from "@playwright/test";

test("Negative username test", async ({})=>{

    let browser:Browser=await chromium.launch({channel:'chrome',headless:false});
    let browserContext:BrowserContext= await browser.newContext();
    let page:Page = await browserContext.newPage();

    console.log("Opening Webpage");
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    console.log("Entering wrong Username");
    await page.locator("input[name='username']").fill("incorrectUser");

    console.log("Entering correct Password");
    await page.locator("input[name='password']").fill("Password123");

    console.log("Clicking on Submit");
    await page.locator("button[id='submit']").click();

    const errorMessage = page.locator("div[id='error']");
    // Verify error message is displayed
    const actualMessage = await errorMessage.innerText();

console.log("Actual error message:", actualMessage);

    // Verify exact error message text
    //await expect(errorMessage).toHaveText("Your username is invalid!");

    //console.log("Error message verified successfully");
});

test.only("Negative Password test", async ({})=>{

    let browser:Browser=await chromium.launch({channel:'chrome',headless:false});
    let browserContext:BrowserContext= await browser.newContext();
    let page:Page = await browserContext.newPage();

    console.log("Opening Webpage");
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    console.log("Entering Username");
    await page.locator("input[name='username']").fill("student");

    console.log("Entering wrong Password");
    await page.locator("input[name='password']").fill("Password123456");

    console.log("Clicking on Submit");
    await page.locator("button[id='submit']").click();

    const errorMessage2 = page.locator("div[id='error']");

    let messagedisplayed=await errorMessage2.innerText();
    console.log("Error message is: ",messagedisplayed);

});