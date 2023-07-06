import {test, expect} from '@playwright/test'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import * as data from '../../data/credentials.json'

test.describe('Home Page tests', ()=>{
    let loginPage: LoginPage
    let homePage: HomePage

    test.beforeEach(async({page})=>{
        homePage = new HomePage(page)
        await homePage.visitHomePage()
        await homePage.navigateTo("Log in")
    })
    
    test('Login using valid credentials', async ({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.loginWith(data.Valid_Credentials.username, data.Valid_Credentials.password)
        await expect(homePage.userName).toBeVisible() 
        await expect(homePage.userName).toContainText("Welcome " + data.Valid_Credentials.username)
    })

    test('Login using invalid credentials', async ({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.loginWith(data.Invalid_Credentials.username, data.Invalid_Credentials.password)
        await expect(homePage.userName).not.toBeVisible() 
    })
})


