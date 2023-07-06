import test, { expect } from "@playwright/test";
import HomePage from "../../pages/HomePage";

test.describe('Contact page tests', ()=>{
    let homePage: HomePage
    test.beforeEach(async({page})=>{
        homePage = new HomePage(page)
        await homePage.visitHomePage()
    })

    test('User can visit contact page and see contact form', async({page})=>{
        await homePage.navigateTo('Contact')
        await expect(homePage.contactForm).toBeVisible()
    })

    test('User can send message via contact form', async({page})=>{
        await homePage.navigateTo('Contact')
        await expect(homePage.contactForm).toBeVisible()
        await homePage.fillUpContactForm('tester@gmail.com','Tester', 'Hello!!')
        await expect(homePage.contactForm).not.toBeVisible()
    })
})