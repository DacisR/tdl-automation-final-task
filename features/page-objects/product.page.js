import { Page } from "./page.js";
import { getRandomInteger } from "../utils/utils.js";

class ProductPage extends Page {
    get addToCartButton() { return $('#add_to_cart button'); }
    get availableQuantity() { return $('#pQuantityAvailable'); }
    get checkoutLink() { return $('a[title="Proceed to checkout"]'); }
    get colorPickList() { return $$('#color_to_pick_list a.color_pick'); }
    get sizeDropdownMenu() { return $('#attributes select'); }
    sizeDropdownItem(size) { return $(`#attributes select option[title="${size}"]`) }
    async selectRandomColor() {
        const numberOfColors = await this.colorPickList.length;

        if (numberOfColors > 1) {
            const colorNumber = getRandomInteger(numberOfColors);
            await this.colorPickList[colorNumber].click();
        }

        return true;
    }
    async selectSizeDropdown(size) {
        await this.sizeDropdownMenu.click();
        await this.sizeDropdownItem(size).click();
    }
}

export default new ProductPage();
