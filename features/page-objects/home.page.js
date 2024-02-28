import { Page } from "./page.js";

class HomePage extends Page {
    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/index.php');
    }
}

export default new HomePage();
