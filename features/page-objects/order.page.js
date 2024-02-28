import { Page } from "./page.js";

class OrderPage extends Page {
    get checkoutLink() { return $('.cart_navigation a[title="Proceed to checkout"]'); }
    get deleteProduct() { return $('a[title="Delete"]'); }
    get emptyCartAlert() { return $('.alert'); }
    get productsQuantity() { return $('#summary_products_quantity'); }
}

export default new OrderPage();
