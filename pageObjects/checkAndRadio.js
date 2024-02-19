class CheckAndRadio{
    constructor(page){
        this.page = page;
        this.femaleRadioButton = this.page.locator("//input[@id = 'femalerb']");
        this.engCheckbox = this.page.locator("//input[@id = 'englishchbx']");
        this.hindiCheckBox = this.page.locator("//input[@id = 'hindichbx']");
        this.chineseCheckBox = this.page.locator("//input[@id = 'chinesechbx']");
        this.latinCheckBox = this.page.locator("//input[@id = 'latinchbx']");
        this.spanishCheckBox = this.page.locator("//input[@id = 'spanishchbx']");
        this.frenchcheckBox = this.page.locator("//input[@id = 'frenchchbx']");
    }
    async checkTheCheckboxes(){
        await this.femaleRadioButton.check();
        await this.engCheckbox.check();
        await this.hindiCheckBox.check();
        await this.chineseCheckBox.check();
        await this.latinCheckBox.check();
        await this.spanishCheckBox.check();
        await this.frenchcheckBox.check();
    }
}
module.exports = { CheckAndRadio }