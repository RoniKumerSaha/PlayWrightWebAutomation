import test, { expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import * as data from '../data/products.json'
import ProductPage from "../pages/ProductPage";

test.describe('Visual smoke testing', ()=>{
    let homePage: HomePage
    let productPage: ProductPage
    test.beforeEach(async({page})=>{
        homePage = new HomePage(page)
        productPage = new ProductPage(page)
        await homePage.visitHomePage()
    })

    test('User should see right UI for Home page', async({page})=>{
        expect(await homePage.page.screenshot()).toMatchSnapshot('HomePage.png')
    })

    test('User should see product list in Home page', async({page})=>{
        expect(await homePage.productList.screenshot()).toMatchSnapshot('ProductList.png')
    })

    test('User can view products in product details page', async ({page})=>{
        await homePage.selectProduct(data.products[0].category,data.products[0].name)
        await expect(productPage.productPrice).toContainText(data.products[0].price)
        await expect(productPage.productTitle).toContainText(data.products[0].name)
        expect(await productPage.page.screenshot()).toMatchSnapshot('ProductDetails.png')
    })
})