import { expect, Locator, Page } from "@playwright/test"
import BasePage from "./BasePage"

export default class HomePage extends BasePage{
    readonly userName: Locator
    readonly contactForm: Locator
    readonly contactEmail: Locator
    readonly contactName: Locator
    readonly contactMessage: Locator
    readonly sendMessage: Locator
    readonly closeButton: Locator
    readonly productList: Locator

    constructor(page: Page){
        super(page)
        this.userName = page.locator('#nameofuser')
        this.contactForm = page.locator('#exampleModalLabel')
        this.contactEmail = page.locator('#recipient-email')
        this.contactName = page.locator('#recipient-name')
        this.contactMessage = page.locator('#message-text')
        this.sendMessage = page.locator('//button[contains(text(),"Send message")]')
        this.closeButton = page.locator('(//button[contains(text(),"Close")])[1]')
        this.productList = page.locator('div[class="list-group"]')
    }

   async fillUpContactForm(email: string, name: string, message: string){
        await this.page.waitForSelector('#message-text')
        await this.contactEmail.type(email)
        await this.contactName.type(email)
        await this.contactMessage.type(email)
        await this.sendMessage.click()
   }

   async selectProduct(category: string, name: string){
    await this.page.locator('text="' + category + '"').click()
    await this.page.locator('text="' + name + '"').click()
   }
}