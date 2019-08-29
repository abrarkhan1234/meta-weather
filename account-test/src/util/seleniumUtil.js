
const { By, until } = require('selenium-webdriver')

const waitUntilTime = 20000
class seleniumUtil {
async getCookie(cookieName, driver) {
   return await driver.manage().getCookie(cookieName)
}

  
}
module.exports = seleniumUtil;