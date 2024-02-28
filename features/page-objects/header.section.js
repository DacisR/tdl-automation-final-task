import { Section } from "./section.js";

class HeaderSection extends Section {
    get searchBox() { return $('#search_query_top'); }
    get signInLink() { return $('a.login'); }
    get submitSearchButton() { return $('button[name="submit_search"]'); }
    get viewShoppingCartLink() { return $('a[title="View my shopping cart"]'); }
}

export default new HeaderSection();
