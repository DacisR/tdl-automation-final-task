import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";
import headerSection from "../page-objects/header.section.js";
import productsPage from "../page-objects/products.page.js";

Given('I am on the home page', async function() {
    await homePage.open();
});

When('I enter {string} in the search box', async function(keyword) {
    await headerSection.searchBox.setValue(keyword);
});

When('I click the Submit Search button', async function() {
    await headerSection.submitSearchButton.click();
});

Then('Only products that contain {string} are shown', async function(keyword) {
    await productsPage.compareSearchResults(keyword);
});
