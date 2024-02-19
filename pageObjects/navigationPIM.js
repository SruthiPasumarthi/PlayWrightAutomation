
class NavigationPIM{
    constructor(page){
        this.page = page;
        this.menuOfPIM = this.page.locator("//span[text() = 'PIM']");
        this.headerOfPIM = this.page.locator("//h6[text() = 'PIM']");
    }
    async navigateToPIMPage(){
        await this.menuOfPIM.click();
        await this.page.waitForLoadState();
    } 
}

module.exports = { NavigationPIM };