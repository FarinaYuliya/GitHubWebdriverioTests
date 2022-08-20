import { ChainablePromiseElement } from 'webdriverio';

 class AccountPage {
    
    public open () {
        return browser.url(`https://github.com/`)
    }
    public get btnCreateNewRepository() {
        return $(".col-xl-4>:nth-child(3)[href]");
    }
     public get headerText() {
         return $(".h1.lh-condensed");
     }

}

export default new AccountPage();