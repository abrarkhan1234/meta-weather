const { Builder, By, Key, until } = require('selenium-webdriver')
export default class Page {
    constructor(driver) {
        this.driver = driver
    }
    
    open (path) {
        return this.driver.get(path)
    }
}