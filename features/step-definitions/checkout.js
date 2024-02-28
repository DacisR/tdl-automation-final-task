import { Given, When, Then } from "@wdio/cucumber-framework";
import headerSection from "../page-objects/header.section.js";
import productsPage from "../page-objects/products.page.js";
import productPage from "../page-objects/product.page.js";
import orderPage from "../page-objects/order.page.js";
import authenticationPage from "../page-objects/authentication.page.js";

Given('I am not signed in', async function() {
    await expect(headerSection.signInLink).toHaveText(expect.stringContaining("Sign in"));
});

When('I add an item to the cart', async function() {
    await headerSection.selectMenuItem("Women").click();
    await productsPage.firstProductImageLink.click();
    await productPage.mediumSizeOption.click();
    await productPage.selectRandomColor();
    await productPage.addToCartButton.click();
    await productPage.checkoutLink.click();
});

When('I click the Proceed to Checkout button', async function() {
    await orderPage.checkoutLink.click();
});

Then('I see the Login form', async function() {
    await expect(authenticationPage.loginForm).toBeDisplayed();
});

Then('I see the Create an Account form', async function() {
    await expect(authenticationPage.createAccountForm).toBeDisplayed();
});
