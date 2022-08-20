import { ChainablePromiseElement } from 'webdriverio';

class EnterpriseSereverPage {

    public open() {
        return browser.url(`https://enterprise.github.com/trial`)
    }
    public get nameInput() {
        return $('#contact_request_name');
    }
    public get companyInput() {
        return $("#contact_request_organization_name");
    }
    public get workEmailInput() {
        return $("#contact_request_email");
    }
    public get checkboxDeployGoogle() {
        return $("#contact_request_instance_type_gcp");
    }
    public get checkboxYes() {
        return $("#questions_yes");
    }
    public get questionsListInput() {
        return $("#questions-list");
    }
    public get agreedTermsCheckbox() {
        return $("#contact_request_agreed_to_terms");
    }





    public async setNameInput(Name: string) {
        await this.nameInput.setValue(Name);
    }
    public async setCompanyInput(Company: string) {
        await this.companyInput.setValue(Company);
    }

    public async setWorkEmailInput(WorkEmail: string) {
        await this.workEmailInput.setValue(WorkEmail);
        await this.workEmailInput.addValue("@github.com");
    }

    public async setQuestionsListInput(Questions: string) {
        await this.questionsListInput.setValue(Questions);
    }
}

export default new EnterpriseSereverPage();