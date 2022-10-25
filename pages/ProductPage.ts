import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

export default class ProductPage extends BasePage{
    readonly productTitle: Locator
    readonly productPrice: Locator

    constructor(page: Page) {
        super(page)
        this.productTitle = this.page.locator('h2')
        this.productPrice = this.page.locator('h3')
    }
}