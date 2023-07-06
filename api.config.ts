import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    retries: 0,
    testDir: 'tests/api_tests',
    use:{
        baseURL: 'https://restful-booker.herokuapp.com'
    }
}
export default config