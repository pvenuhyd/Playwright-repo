# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.js >> endtoend
- Location: tests\endtoend.spec.js:3:1

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('div[class=\'col-text -main\']')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "6a47cf2ccd73adf7e5908f24 ZARA COAT 3 $ 11500 Fri Jul 03 View Delete" [ref=e38]:
          - rowheader "6a47cf2ccd73adf7e5908f24" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ZARA COAT 3" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Fri Jul 03" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "6a47c98ccd73adf7e5907e25 ZARA COAT 3 $ 11500 Fri Jul 03 View Delete" [ref=e49]:
          - rowheader "6a47c98ccd73adf7e5907e25" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ZARA COAT 3" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Fri Jul 03" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "6a47a908cd73adf7e58fe7bd ZARA COAT 3 $ 11500 Fri Jul 03 View Delete" [ref=e60]:
          - rowheader "6a47a908cd73adf7e58fe7bd" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ZARA COAT 3" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Fri Jul 03" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "6a47a7ffcd73adf7e58fe126 ZARA COAT 3 $ 11500 Fri Jul 03 View Delete" [ref=e71]:
          - rowheader "6a47a7ffcd73adf7e58fe126" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "ZARA COAT 3" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Fri Jul 03" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "6a4160b6378febeacdd62af3 ZARA COAT 3 $ 11500 Sun Jun 28 View Delete" [ref=e82]:
          - rowheader "6a4160b6378febeacdd62af3" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "ZARA COAT 3" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Sun Jun 28" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "6a415ffb378febeacdd6295e ZARA COAT 3 $ 11500 Sun Jun 28 View Delete" [ref=e93]:
          - rowheader "6a415ffb378febeacdd6295e" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "ZARA COAT 3" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Sun Jun 28" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "6a415e8c378febeacdd62653 ZARA COAT 3 $ 11500 Sun Jun 28 View Delete" [ref=e104]:
          - rowheader "6a415e8c378febeacdd62653" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "ZARA COAT 3" [ref=e108]
          - cell "$ 11500" [ref=e109]
          - cell "Sun Jun 28" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | 
  3  | test('endtoend', async({page})=>{
  4  | await page.goto('https://rahulshettyacademy.com/client');
  5  | const email = page.locator('#userEmail');
  6  | const password = page.locator('#userPassword');
  7  | const submit = page.locator('#login');
  8  | const products = page.locator(".card-body h5[style*='upper']");
  9  | 
  10 | await email.fill('venubabu.pinninty@gmail.com');
  11 | await password.fill('Kstewart@7');
  12 | await submit.click();
  13 | //page.waitForLoadState('networkidle');
  14 | await products.nth(1).waitFor();
  15 | console.log(await products.last().textContent());
  16 | const count = await products.count();
  17 | console.log(count);
  18 | const product = "ZARA COAT 3";
  19 | for(let i=0;i<count;i++){
  20 |     if(await products.nth(i).textContent()===product){
  21 |         await page.locator("//*[text()='"+product+"']/ancestor::div[@class='card-body']//button[contains(text(),'Add To Cart')]").click();
  22 |         break;
  23 |     }
  24 | }
  25 | const cart = page.locator("[routerlink='/dashboard/cart']");
  26 | await cart.click();
  27 | page.locator('h3:has-text("ZARA COAT 3")').waitFor();
  28 | const bool = page.locator('h3:has-text("ZARA COAT 3")').isVisible();
  29 | expect(bool).toBeTruthy();
  30 | await page.locator('text=Checkout').click();
  31 | // await page.locator("[placeholder*='Country']").pressSequentially('India');
  32 | 
  33 | await page.locator("[placeholder*='Country']").pressSequentially("India", { delay: 500 });
  34 | 
  35 | const dropdown = page.locator("section[class*='list-group'] button span");
  36 | dropdown.last().waitFor();
  37 | const options = await dropdown.allTextContents();
  38 | console.log(options);
  39 | 
  40 | for(let i=0;i<await dropdown.count();i++){
  41 |     if(await dropdown.nth(i).textContent()===(" India")){
  42 |         await dropdown.nth(i).click();
  43 |         break;
  44 |     }
  45 | }
  46 | 
  47 | await page.locator('text=Place Order ').click();
  48 | await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  49 | const order = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
  50 | console.log(order);
  51 | await page.locator('button[routerlink*="myorders"]').click();
  52 | 
  53 | const rows = page.locator("table[class*='table-hover'] tbody tr");
  54 | await rows.last().waitFor();
  55 | const count1 = await rows.count();
  56 | console.log(count1);
  57 | 
  58 | for(let i=0;i<await count1;i++){
  59 |     const orderID = await rows.nth(i).locator('th').textContent();
  60 |     if(orderID.includes(order)){
  61 |         console.log(orderID);
  62 |         await rows.nth(i).locator('button').nth(0).click();
  63 |         break;
  64 |     }
  65 | }
  66 | 
> 67 | const orderIDDetails = await page.locator("div[class='col-text -main']").textContent();
     |                                                                          ^ Error: locator.textContent: Test timeout of 100000ms exceeded.
  68 | expect(orderIDDetails.includes(order)).toBeTruthy();
  69 | // await page.pause();
  70 | });
```