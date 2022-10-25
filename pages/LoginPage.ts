import {Locator, Page} from '@playwright/test'
import BasePage from './BasePage'
export default class LoginPage extends BasePage{
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

     constructor(page: Page){
        super(page)
        this.userNameInput = page.locator('#loginusername')
        this.passwordInput = page.locator('#loginpassword')
        this.loginButton = page.locator('//button[contains(text(),"Log in")]')
    }
    
    async loginWith(username: string, password: string) {
        await this.page.waitForSelector('#loginusername')
        await this.userNameInput.type(username)
        await this.passwordInput.type(password)
        await this.loginButton.click()
    }

}