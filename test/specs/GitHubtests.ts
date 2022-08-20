import MainPage from '../pageobjects/main.page';
import SignUpPage from '../pageobjects/signUp.page';
import SignInPage from '../pageobjects/signIn.page';
import AccountPage from '../pageobjects/account.page';
import SearchPage from '../pageobjects/search.page';
import EnterpriseCloudPage from '../pageobjects/enterprise_cloud.page';
import EnterpriseServerPage from '../pageobjects/enterprise_server.page';
import { getRndInteger } from '../utils/nubmer.utils';

describe('Sign up', () => {
    it('should register with valid credentials', async () => {
        await SignUpPage.open();

        await browser.waitUntil(async () => await SignUpPage.inputEmail.isDisplayed(),
            { timeout: 5000, timeoutMsg: "InputEmail is not displayed" });

        await SignUpPage.setEmail('test1forGitHub@gmail.com');
        await SignUpPage.setPassword('TESTforGitHub12345');
        await SignUpPage.setUsername('TesterYuliya');
        await SignUpPage.setOptIn('y');

        await expect(SignUpPage.СaptchaBlock).toBeDisplayed();
    });
})

describe('Sign in', () => {
    it('should login with valid credentials', async () => {
        await browser.reloadSession()
        await SignInPage.open();

        await SignInPage.setUsernameOrEmail('tester.yuliya.farina@gmail.com');
        await SignInPage.setPassword('testeronGit8');

        await expect(AccountPage.btnCreateNewRepository).toBeExisting();
        await expect(AccountPage.headerText).toHaveTextContaining(
            'The home for all developers — including you.');

    });

    it('should not login with empty fields', async () => {
        await browser.reloadSession()
        await SignInPage.open();

        await SignInPage.setUsernameOrEmail('');
        await SignInPage.setPassword('');

        await expect(SignInPage.validMessage).toHaveTextContaining(
            'Incorrect username or password.');

    });

    it('should not login with invalid email', async () => {
        await browser.reloadSession()
        await SignInPage.open();

        await SignInPage.setUsernameOrEmail('abcde@');
        await SignInPage.setPassword('testeronGit8');

        await expect(SignInPage.validMessage).toHaveTextContaining(
            'Incorrect username or password.');

    });
})

describe('Forgot password', () => {
    it('should open PasswordResetPage', async () => {
        await SignInPage.open();
        await SignInPage.forgotPassLink.click();
        await expect(browser).toHaveUrlContaining('https://github.com/password_reset');

    });
})

describe('Main page', () => {
    it('should display the "Mobile","Skills" and "Contact Sales" links in the drop-down menu', async () => {
        await MainPage.open();
        await MainPage.labelLink.moveTo();

        await MainPage.hoverProductDropDown();
        await expect(MainPage.mobileLink).toBeDisplayed();
        await MainPage.labelLink.moveTo();

        await MainPage.hoverExploreDropDown();
        await expect(MainPage.skillsLink).toBeDisplayed();
        await MainPage.labelLink.moveTo();

        await MainPage.hoverPricingDropDown();
        await expect(MainPage.contactSalesLink).toBeDisplayed();
    });


    it('should scroll to the "Develop" section', async () => {
        await MainPage.open();

        MainPage.developNavigationLink.click();

        await expect(MainPage.codespacesLink).toBeDisplayedInViewport();
    });
})

describe('Pricing menu', () => {
    it('should display the page title', async () => {
        await browser.reloadSession()
        await MainPage.open();

        await MainPage.hoverPricingDropDown();
        await MainPage.plansLink.click();
        const btnJoinForFree = await $('[test_selector="plan-input-free"]');
        await btnJoinForFree.click();

        await expect(browser).toHaveTitle("Join GitHub · GitHub")

    });
})

describe('Search', () => {
    it('URL should contain search keyword', async () => {
        await MainPage.open();
        await MainPage.searchInput.setValue("webdriverio\n");
        await SearchPage.typeScriptLink.click();

        await expect(browser).toHaveUrlContaining('webdriverio')

    });

    it('search results should contain search keyword', async () => {
        await MainPage.open();
        await MainPage.searchInput.setValue("java\n");

        for (const result of (await SearchPage.searchResults)) {
            await expect(result).toHaveTextContaining(/java/i);

        }
    });

    it('should not have any results after entering an invalid search request', async () => {
        await MainPage.open();

        const searchText = "fdfxhcyvuyyuvui123";
        await MainPage.searchInput.setValue(searchText + "\n");

        await expect(SearchPage.messageElem).toHaveText(`We couldn’t find any repositories matching '${searchText}'`);

    });
})

describe('Enterprise', () => {
    it('should fill in the fields on the "Enterprise Cloud" and "Enterprise Server" pages', async () => {
        await MainPage.open();

        await MainPage.btnStartFreeTrial.scrollIntoView();
        await MainPage.btnStartFreeTrial.click();

        const btnEnterpriseCloud = await $('.pricing-recommended-plan');
        await btnEnterpriseCloud.click();

        await EnterpriseCloudPage.setUsername(getRndInteger());
        await EnterpriseCloudPage.setEmail(getRndInteger());
        await EnterpriseCloudPage.setPassword(getRndInteger());

        await browser.back();

        const btnEnterpriseServer = await $("[href*='https://enterprise.github.com/trial']");
        await btnEnterpriseServer.click();

        await EnterpriseServerPage.setNameInput(getRndInteger());
        await EnterpriseServerPage.setCompanyInput(getRndInteger());
        await EnterpriseServerPage.setWorkEmailInput(getRndInteger());
        await EnterpriseServerPage.checkboxDeployGoogle.click();
        await EnterpriseServerPage.checkboxYes.click();
        await EnterpriseServerPage.setQuestionsListInput("Why?!!");
        await EnterpriseServerPage.agreedTermsCheckbox.click();

        await expect(EnterpriseServerPage.agreedTermsCheckbox).toBeChecked();
    });
})
