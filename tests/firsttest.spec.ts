//add test runner
import {Browser, chromium, test,expect} from "@playwright/test";

test("Test1: Test for AMazon application launch",async({page})=>{

//To opne any application
await page.goto("https://www.amazon.com/");

//Get the title of current page: title()
console.log("Amazon Application Launched "+await page.title());
//verify page Title
await expect(page).toHaveTitle(/Amazon.com/);

await page.waitForTimeout(3000);
});

test("Test2: Verify Page Title is Amazon.com", async ({page})=>{
    await page.goto("https://www.amazon.com/");
    const Title= await page.title();
    console.log("Application title is: Amazon.com " + Title);
    await expect(page).toHaveTitle(/Amazon.com/);
});
