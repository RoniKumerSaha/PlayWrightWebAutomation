import { Locator, Page } from "@playwright/test"

export default class Navbar{
    page: Page
    readonly home: Locator
    readonly contact: Locator
    readonly cart: Locator
    readonly aboutUs: Locator
    readonly login: Locator
    readonly signUp: Locator

    constructor(page: Page) {
        this.page = page
        this.home = page.locator('//a[contains(text(),"Home")]')
        this.contact = page.locator('//a[contains(text(),"Contact")]')
        this.cart = page.locator('//a[contains(text(),"Cart")]')
        this.aboutUs = page.locator('//a[contains(text(),"About us")]')
        this.login = page.locator('//a[contains(text(),"Log in")]')
        this.signUp = page.locator('//a[contains(text(),"sign up")]')
    }

    async navigateTo(option: string){
        switch(option){
            case 'Home':
                await this.home.click()
                break
            case 'Contact':
                await this.contact.click()
                break
            case 'Cart':
                await this.cart.click()
                break
            case 'About us':
                await this.aboutUs.click()
                break
            case 'Log in':
                await this.login.click({delay: 5000})
                break
            case 'Sign up':
                await this.signUp.click()
                break
            default:
                break
        }
    }
    
}