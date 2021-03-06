// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('HelloGoogle', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('HelloGoogle', async function() {
    // Test name: HelloGoogle
    // Step # | name | target | value
    // 1 | open | https://www.google.com/ | 
    await driver.get("https://www.google.com/")
    // 2 | setWindowSize | 1587x829 | 
    await driver.manage().window().setRect({ width: 1587, height: 829 })
    // 3 | click | name=q | 
    await driver.findElement(By.name("q")).click()
    // 4 | type | name=q | El huego de En
    await driver.findElement(By.name("q")).sendKeys("El huego de En")
    // 5 | sendKeys | name=q | ${KEY_ENTER}
    await driver.findElement(By.name("q")).sendKeys(Key.ENTER)
    // 6 | click | css=.RzdJxc:nth-child(1) .fc9yUc:nth-child(1) | 
    await driver.findElement(By.css(".RzdJxc:nth-child(1) .fc9yUc:nth-child(1)")).click()
    // 7 | click | css=.ytp-play-button | 
    await driver.findElement(By.css(".ytp-play-button")).click()
  })
})
