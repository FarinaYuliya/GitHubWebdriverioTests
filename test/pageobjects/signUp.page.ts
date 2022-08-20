import { ChainablePromiseElement } from 'webdriverio';


class SignUpPage {

    public open() {
        return browser.url(`https://github.com/signup`)
    }


    public get inputEmail() {
        return $('#email');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get inputUsername() {
        return $('#login');
    }
    public get inputOptIn() {
        return $('#opt_in');
    }


    public get btnContinueToPass() {
        return $('#email-container .js-continue-button');
    }

    public get btnContinueToUsername() {
        return $('#password-container .js-continue-button');
    }

    public get btnContinueToOptIn() {
        return $('#username-container .js-continue-button');
    }

    public get btnContinueToCaptcha() {
        return $('#opt-in-container .js-continue-button');
    }

    public get СaptchaBlock() {
        return $('#captcha-and-submit-container');
    }



    public async setEmail(email: string) {
        await this.inputEmail.setValue(email);
        await this.btnContinueToPass.waitForClickable({ timeout: 3000 });
        await this.btnContinueToPass.click();
    }

    public async setPassword(password: string) {
        await this.inputPassword.setValue(password);
        await this.btnContinueToUsername.waitForClickable({ timeout: 3000 });
        await this.btnContinueToUsername.click();
    }

    public async setUsername(username: string) {
        await this.inputUsername.setValue(username);
        await this.btnContinueToOptIn.waitForClickable({ timeout: 3000 });
        await this.btnContinueToOptIn.click();
    }

    public async setOptIn(optin: string) {
        await this.inputOptIn.setValue(optin);
        await this.btnContinueToCaptcha.waitForClickable({ timeout: 3000 });
        await this.btnContinueToCaptcha.click();
    }

}

export default new SignUpPage();