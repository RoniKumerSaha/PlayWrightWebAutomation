import { Page, expect } from "@playwright/test"
import * as env from '../data/URL.json'
import Navbar from "./component/Navbar"

export default class BasePage extends Navbar{
    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async visitHomePage(){
        await this.page.goto(env.Base_URL, {waitUntil: 'networkidle'})
    }



}