import { When, Then } from "@wdio/cucumber-framework";
import productsPage from "../page-objects/products.page.js";
import productPage from "../page-objects/product.page.js";
import headerSection from "../page-objects/header.section.js";
import orderPage from "../page-objects/order.page.js";

When('I select {word} menu item', async function(menuItem) {
    await headerSection.selectMenuItem(menuItem).click();
});

When('I click on a product', async function() {
    await productsPage.firstProductImageLink.click();
});

When('I select size and color', async function() {
    await productPage.mediumSizeOption.click();
    await productPage.selectRandomColor();
});

When('I click Add to Cart button', async function() {
    await productPage.addToCartButton.click();
});

When('I click Proceed to Checkout button', async function() {
    await productPage.checkoutLink.click();
});

Then('My cart shows 1 item', async function() {
    await expect(headerSection.numberOfProducts).toHaveText("1");
    await expect(orderPage.productsQuantity).toHaveText("1 product");
});
