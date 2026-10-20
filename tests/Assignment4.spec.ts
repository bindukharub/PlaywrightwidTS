import{test,expect,Browser,chromium, Page,BrowserContext} from "@playwright/test";

test("Positive LogIn test", async ({})=>{

    let browser:Browser = await chromium.launch({channel:"chrome",headless:false});
    let browserContext:BrowserContext = await browser.newContext();
    let page:Page = await browserContext.newPage();

console.log('Step 1: Opening website');
await page.goto("https://practicetestautomation.com/practice-test-login/");


//await page.waitForTimeout(30000);
console.log('Step 2: Filling username');
await page.locator("input[name='username']").fill("student");
console.log('Step 3: Filling password');
await page.locator("input[name='password']").fill("Password123");
console.log('Step 4: Clicking submit');
await page.locator("button[id='submit']").click();

await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

//await expect(page.locator("#post-title")).toHaveText("Logged In Successfully");

//await expect(page.getByText("Log out", { exact: true })).toBeVisible();

         await expect(page.locator("h1")).toContainText(
        "Logged In Successfully"
    );

    // Verify logout link
    await page.locator('a[href="https://practicetestautomation.com/practice-test-login/"]').click();

    // Close browser
    //await browser.close();
//await expect(page.locator("#wp-block-button__link has-text-color has-background has-very-dark-gray-background-color")).toHaveText("Log out");
});

test.only("Negative username test", async ({})=>{

    let browser:Browser=await chromium.launch({channel:'chrome',headless:false});
    let browserContext:BrowserContext= await browser.newContext();
    let page:Page = await browserContext.newPage();

    console.log("Opening Webpage");
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    console.log("Entering wrong Username");
    await page.locator("input[name='username']").fill("admin");

    console.log("Entering correct Password");
    await page.locator("input[name='password']").fill("Password123");

    console.log("Clicking on Submit");
    await page.locator("button[id='submit']").click();

    const errorMessage = page.locator('#error');

    await expect(errorMessage).toBeVisible();

    // Verify exact error message text
    await expect(errorMessage).toHaveText('Your username is invalid!');
});