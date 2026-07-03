const {test,expect} = require('@playwright/test');

test('List of elements', async({page})=>
{

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
const productList = await products.allTextContents();
console.log(productList);
console.log(productList[1]);
}


);

test('UI controls', async({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const dropdown = page.locator('select.form-control');

await dropdown.selectOption('Consultant');
const values = page.locator('select.form-control option').allTextContents();
console.log(await values);
const selectedOption = page.locator('select.form-control option:checked').textContent();
console.log(await selectedOption);
// console.log(await dropdown.inputValue());
await page.locator("input[value='user']").click();
await page.locator('#okayBtn').click();
await expect(page.locator("input[value='user']")).toBeChecked();
console.log(await page.locator('.form-check-inline input:checked').inputValue());
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
await expect(page.locator('#terms')).not.toBeChecked();
await page.pause();
});

test('Windows Handling', async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// Incase multiple windoes opened
//const [newPage,newPage2] = await Promise.all([
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  await page.locator('.blinkingText').nth(0).click()
]);
// To count no of windows opened
// context.pages().length();
const maidID = await newPage.locator('.im-para a').textContent();
console.log(maidID);
await newPage.close();
await page.locator('#username').fill(maidID);
// To open a new window
// const [newPage] = await Promise.all([
//   context.waitForEvent('page'),
//   page.getByRole('link', { name: 'Open New Window' }).click()
// ]);
// Interact with the new window
// await newPage.waitForLoadState();
// await newPage.getByText('Welcome to new page').isVisible();
// await page.pause();
});
