import { ChainablePromiseElement } from 'webdriverio';


class SignInPage {

    public open() {
        return browser.url(`https://github.com/login`)
    }


    public get inputUsernameOrEmail() {
        return $('#login_field');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSignIn() {
        return $('.btn-primary');
    }

    public get validMessage() {
        return $('.flash>.px-2');
    }

    public get forgotPassLink() {
        return $("[href='/password_reset']");
    }

    

    public async setUsernameOrEmail(UsernameOrEmail: string) {
        await this.inputUsernameOrEmail.setValue(UsernameOrEmail);
        
    }

    public async setPassword(password: string) {
        await this.inputPassword.setValue(password);
        await this.btnSignIn.waitForClickable({ timeout: 3000 });
        await this.btnSignIn.click();
    }    

    
}

export default new SignInPage();