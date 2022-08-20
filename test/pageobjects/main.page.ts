import { ChainablePromiseElement } from 'webdriverio';

class MainPage {

    public open() {
        return browser.url(`https://github.com/`)
    }

    public get productDropDown() {
        return $('nav>ul>li:first-of-type');
    }
    public get exploreDropDown() {
        return $('nav>ul>li:nth-child(4)');
    }
    public get pricingDropDown() {
        return $('nav>ul>li:nth-child(6)');
    }
    public get mobileLink() {
        return $(".lh-condensed-ultra[href='/mobile']");
    }
    public get skillsLink() {
        return $(".HeaderMenu [href='https://skills.github.com/']");
    }
    public get contactSalesLink() {
        return $(".HeaderMenu [href='https://github.com/enterprise/contact']");
    }
    public get labelLink() {
        return $("[class='octicon octicon-mark-github']");
    }
    public get plansLink() {
        return $(".HeaderMenu [href='/pricing']");
    }

    public get searchInput() {
        return $(".form-control .input-sm");
    }
    public get btnStartFreeTrial() {
        return $("[data-test-selector='start-trial-button']");
    }
    public get developNavigationLink() {
        return $('[href="#home-develop"]');
    }
    public get codespacesLink() {
        return $('.link-mktg[href="/features/codespaces"]');
    }








    public async hoverProductDropDown() {
        await this.productDropDown.moveTo();

    }
    public async hoverExploreDropDown() {
        await this.exploreDropDown.moveTo();

    }
    public async hoverPricingDropDown() {
        await this.pricingDropDown.moveTo();
    }


}

export default new MainPage();
