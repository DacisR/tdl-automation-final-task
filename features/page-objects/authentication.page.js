import { Page } from "./page.js";

class AuthenticationPage extends Page {
    get createAccountForm() { return $('#create-account_form'); }
    get loginForm() { return $('#login_form'); }
}

export default new AuthenticationPage();
