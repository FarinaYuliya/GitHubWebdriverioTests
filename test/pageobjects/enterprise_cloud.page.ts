import { ChainablePromiseElement } from 'webdriverio';

class EnterpriseCloudPage {

    public open() {
        return browser.url(`https://github.com/join`)
    }
    public get userNameInput() {
        return $('#user_login');
    }
    public get emailInput() {
        return $("#user_email");
    }
    public get passInput() {
        return $("#user_password");
    }


    

    public async setUsername(Username: string) {
        await this.userNameInput.setValue(Username);
    }
    public async setEmail(Email: string) {
        await this.emailInput.setValue(Email);
        await this.emailInput.addValue("@mail.com");
    }

    public async setPassword(Password: string) {
        await this.passInput.setValue(Password);
        await this.passInput.addValue("TesTtESt");
    }
}

export default new EnterpriseCloudPage();