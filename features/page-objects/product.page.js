import { Page } from "./page.js";
import { getRandomInteger } from "../utils/utils.js";

class ProductPage extends Page {
    get addToCartButton() { return $('#add_to_cart button'); }
    get availableQuantity() { return $('#pQuantityAvailable'); }
    get checkoutLink() { return $('a[title="Proceed to checkout"]'); }
    get colorPickList() { return $$('#color_to_pick_list a.color_pick'); }
    get sizeDropdownMenu() { return $('#attributes select'); }
    get mediumSizeOption() { return $('#attributes select option[value="2"]') }
    async selectRandomColor() {
        const numberOfColors = await this.colorPickList.length;

        if (numberOfColors > 1) {
            const colorNumber = getRandomInteger(numberOfColors);
            await this.colorPickList[colorNumber].click();
        }

        return true;
    }
}

export default new ProductPage();
