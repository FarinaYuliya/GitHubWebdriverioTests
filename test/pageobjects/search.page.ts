import { ChainablePromiseElement } from 'webdriverio';

class SearchPage {

    public open() {
        return browser.url(`https://github.com/search`)
    }

    public get typeScriptLink() {
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]');
    }

    public get searchResults() {
        return $$('.repo-list-item .f4');
    }

    public get messageElem() {
        return $('.codesearch-results h3');
    }
    
    
    


}
    export default new SearchPage();
