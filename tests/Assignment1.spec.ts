import{test,expect,chromium,Browser,Page,BrowserContext} from "@playwright/test";

test("Open website and Verify Title", async ({}) => {
    let browser:Browser=await chromium.launch({channel:'msedge',headless:false});
     //context
        let browserContext:BrowserContext=await browser.newContext();
    
        //page
        let page:Page=await browserContext.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle(/OrangeHRM/);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(10000);
    console.log("Page Title is: ", await page.title());
    console.log("Page URL is: ", page.url());
});