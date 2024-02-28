import { Section } from "./section.js";

class HeaderSection extends Section {
    get emptyCart() { return $('a[title="View my shopping cart"] .ajax_cart_no_product'); }
    get numberOfProducts() { return $('a[title="View my shopping cart"] .ajax_cart_quantity'); }
    get searchBox() { return $('#search_query_top'); }
    selectMenuItem(menuItem) { return $(`#block_top_menu > ul > li > a[title="${menuItem}"]`); }
    get signInLink() { return $('a.login'); }
    get submitSearchButton() { return $('button[name="submit_search"]'); }
    get viewShoppingCartLink() { return $('a[title="View my shopping cart"]'); }
}

export default new HeaderSection();
