import{test,expect} from "@playwright/test";

test("Test for Navigation in between app",async({page})=>{
await page.goto('https://www.amazon.in/');
//console.log("Page title is: ",await page.title());

await page.goto('https://www.google.com/');
console.log("Page Title is: ", await page.title());


 await page.goBack();

     await page.waitForTimeout(3000);//1sec =1000ms
     console.log("Title after going back is: ",await page.title());

     await page.goForward();
     await page.waitForTimeout(1000);//1sec =1000ms
     console.log("Title after going forward is: ",await page.title());

     await page.reload();
     await page.waitForTimeout(1000);
     console.log("Page reload opens: ", await page.url());

});