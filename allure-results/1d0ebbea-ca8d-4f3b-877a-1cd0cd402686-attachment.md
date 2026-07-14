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
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('text=Place Order')
    - locator resolved to <a _ngcontent-eac-c35="" class="btnn action__submit ng-star-inserted">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ta-backdrop" _ngcontent-eac-c32=""></div> from <div _ngcontent-eac-c35="" class="user__address">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="ta-backdrop" _ngcontent-eac-c32=""></div> from <div _ngcontent-eac-c35="" class="user__address">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    122 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="ta-backdrop" _ngcontent-eac-c32=""></div> from <div _ngcontent-eac-c35="" class="user__address">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

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
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: venubabu.pinninty@gmail.com
            - textbox [ref=e81]: venubabu.pinninty@gmail.com
            - generic [ref=e83]:
              - textbox "Select Country" [ref=e84]: India
              - generic [ref=e85]:
                - button " British Indian Ocean Territory" [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]:
                    - generic [ref=e89]: 
                    - text: British Indian Ocean Territory
                - button " India" [ref=e90] [cursor=pointer]:
                  - generic [ref=e91]:
                    - generic [ref=e92]: 
                    - text: India
            - generic [ref=e94] [cursor=pointer]: Place Order
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
> 47 | await page.locator('text=Place Order ').click();
     |                                         ^ Error: locator.click: Test timeout of 100000ms exceeded.
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
  67 | const orderIDDetails = await page.locator("div[class='col-text -main']").textContent();
  68 | expect(orderIDDetails.includes(order)).toBeTruthy();
  69 | // await page.pause();
  70 | });
```