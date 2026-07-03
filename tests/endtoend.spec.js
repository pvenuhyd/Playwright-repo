const {test,expect} = require('@playwright/test');

test('endtoend', async({page})=>{
await page.goto('https://rahulshettyacademy.com/client');
const email = page.locator('#userEmail');
const password = page.locator('#userPassword');
const submit = page.locator('#login');
const products = page.locator(".card-body h5[style*='upper']");

await email.fill('venubabu.pinninty@gmail.com');
await password.fill('Kstewart@7');
await submit.click();
//page.waitForLoadState('networkidle');
await products.nth(1).waitFor();
console.log(await products.last().textContent());
const count = await products.count();
console.log(count);
const product = "ZARA COAT 3";
for(let i=0;i<count;i++){
    if(await products.nth(i).textContent()===product){
        await page.locator("//*[text()='"+product+"']/ancestor::div[@class='card-body']//button[contains(text(),'Add To Cart')]").click();
        break;
    }
}
const cart = page.locator("[routerlink='/dashboard/cart']");
await cart.click();
page.locator('h3:has-text("ZARA COAT 3")').waitFor();
const bool = page.locator('h3:has-text("ZARA COAT 3")').isVisible();
expect(bool).toBeTruthy();
await page.locator('text=Checkout').click();
// await page.locator("[placeholder*='Country']").pressSequentially('India');

await page.locator("[placeholder*='Country']").pressSequentially("India", { delay: 500 });

const dropdown = page.locator("section[class*='list-group'] button span");
dropdown.last().waitFor();
const options = await dropdown.allTextContents();
console.log(options);

for(let i=0;i<await dropdown.count();i++){
    if(await dropdown.nth(i).textContent()===(" India")){
        await dropdown.nth(i).click();
        break;
    }
}

await page.locator('text=Place Order ').click();
await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
const order = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
console.log(order);
await page.locator('button[routerlink*="myorders"]').click();

const rows = page.locator("table[class*='table-hover'] tbody tr");
await rows.last().waitFor();
const count1 = await rows.count();
console.log(count1);

for(let i=0;i<await count1;i++){
    const orderID = await rows.nth(i).locator('th').textContent();
    if(orderID.includes(order)){
        console.log(orderID);
        await rows.nth(i).locator('button').nth(0).click();
        break;
    }
}

const orderIDDetails = await page.locator("div[class='col-text -main']").textContent();
expect(orderIDDetails.includes(order)).toBeTruthy();
// await page.pause();
});