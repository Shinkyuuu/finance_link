const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const options = new chrome.Options();


const login = async() => {
    let driver = new webdriver.Builder()
        .forBrowser(webdriver.Browser.CHROME)
        // .setChromeOptions(options.addArguments('--headless=new'))
        .setFirefoxOptions(/* ... */)
        .build();

    try {
        await driver.get('https://www.americanexpress.com/en-us/account/login?inav=iNavLnkLog');
        await driver.findElement(By.name("eliloUserID")).sendKeys("cody7275");
        await driver.findElement(By.name("eliloPassword")).sendKeys("*3&p$z!2Xr-ndE@7iaAQPc)");
        await driver.findElement(By.id("loginSubmit")).click();
        await driver.get('https://global.americanexpress.com/dashboard');
        await driver.findElement(By.className("account-switcher-toggler")).click();

        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        setInterval(() => {
        driver.quit();
        }, 10000)
    }
};


module.exports = login;
