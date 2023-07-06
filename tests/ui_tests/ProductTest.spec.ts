import test, { expect } from "@playwright/test";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import * as data from '../../data/products.json'

test.describe('Product tests', ()=>{
    let homePage: HomePage
    let productPage: ProductPage
    test.beforeEach(async ({page})=>{
        homePage = new HomePage(page)
        productPage = new ProductPage(page)
        await homePage.visitHomePage()
    })

    data.products.forEach( p => {
        test(`User can view products: ${p.name}(${p.category})`, async ({page})=>{
            await homePage.selectProduct(p.category,p.name)
            await expect(productPage.productPrice).toContainText(p.price)
            await expect(productPage.productTitle).toContainText(p.name)
        })
    })
})