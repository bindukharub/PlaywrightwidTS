import{test,expect, Browser,BrowserContext, chromium,Page} from "@playwright/test"

//test.use({browserName:'firefox'});

test("Validate Login  and Logout Functionality", async ({}) =>{

    let browser:Browser = await chromium.launch({channel:'chrome',headless:false});
    let browserContext:BrowserContext = await browser.newContext();
    let page:Page = await browserContext.newPage();

    
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{ waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(30000);
await page.locator('input[name="Username"]').fill('Admin');
await page.locator('input[type="Password"]').fill('admin123');
await page.waitForTimeout(30000);

});