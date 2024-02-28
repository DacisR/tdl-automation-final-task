import { Page } from "./page.js";

class ProductsPage extends Page {
    get firstProductImageLink() { return $('ul.product_list .product_img_link'); }
    get productsImagesLinks() { return $$('ul.product_list .product_img_link'); }
    get productsNames() { return $$('ul.product_list .product-name'); }
    async compareSearchResults(keyword) {
        await this.productsNames.forEach(async (product) => {
            await expect(product).toHaveText(expect.stringContaining(keyword));
        });
    }
}

export default new ProductsPage();
