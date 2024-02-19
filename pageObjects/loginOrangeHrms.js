

class LoginOrangeHrms{
    constructor(page){
        this.page = page;
        this.userName = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.submit = this.page.locator("//button[@type = 'submit']");
        this.dashboardHeader = this.page.locator("//h6[text() = 'Dashboard']");

    }
    async fillLoginDetails(){
        await this.userName.fill("Admin");
        await this.password.fill('admin123');
        await this.submit.click();
        await this.page.waitForLoadState();
    }
}

module.exports = { LoginOrangeHrms };