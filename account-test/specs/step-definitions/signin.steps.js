//const {  defineFeature, loadFeature} = require('jest-cucumber')
import {  defineFeature, loadFeature} from 'jest-cucumber'
import SignInPage from '../../src/pages/signIn.page.js'
const assert = require('assert');
const feature = loadFeature('./specs/features/login.feature');
const { Builder, By, Key, until } = require('selenium-webdriver')
const { querySelector } = require('../../src/util/helpers.js')

defineFeature(feature, test => {
    let driver
    let signInPage
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5
    
    beforeEach(async () => {
      driver = await new Builder().forBrowser('firefox').build()
        signInPage = new SignInPage(driver)     
    })
    
    afterEach(async()=>{
        driver.close();
    })
 
    test('Happy path : Successful sign in journey', ({ given, when, then }) => {

        given('I am on sign in page', async() => {
           await signInPage.open()
        });

        when(/^I provide my username as (.*)$/, async(email) => {
            await driver.findElement(By.id(signInPage.username)).sendKeys(email);
        });
        

        given(/^I provide my password as (.*)$/, async(password) => {
            await driver.findElement(By.id(signInPage.password)).sendKeys(password)
        });

        when('I click on sign in button', async() => {
            await driver.findElement(By.id(signInPage.submitButton)).click();
        });

        then('I should see expected cookies on browser', async(cookieTable) => {
            for (const row in cookieTable) {
                const cookie =await driver.manage().getCookie(`${cookieTable[row].cookieName}`);
                assert.equal(cookie.name, `${cookieTable[row].cookieName}`);
                assert.equal(cookie.domain, `${cookieTable[row].domain}`);
              }
        });
        
    });  

    test('Failed scenarios: Unsuccessful  sign in journey', ({ given, when, then }) => {

        given('I am on sign in page', async() => {
           await signInPage.open()
        });

        when(/^I provide my username as (.*)$/, async(email) => {
            await driver.findElement(By.id(signInPage.username)).sendKeys(email);
        });    

        when(/^I provide my password as (.*)$/, async(password) => {
            await driver.findElement(By.id(signInPage.password)).sendKeys(password)
        });

        when('I click on sign in button', async() => {
            await driver.findElement(By.id(signInPage.submitButton)).click();
        });

        then('I should see expected cookies on browser', async(cookieTable) => {
            for (const row in cookieTable) {
                const cookie =await driver.manage().getCookie(`${cookieTable[row].cookieName}`);
                assert.equal(cookie.name, `${cookieTable[row].cookieName}`);
                assert.equal(cookie.domain, `${cookieTable[row].domain}`);
              }
        });
        
    }); 
});
