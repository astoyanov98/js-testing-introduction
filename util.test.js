const puppeteer = require('puppeteer')
const {generateText, checkAndGenerate} = require('./util')

test('should output name and age', () => {
    const text = generateText('alex', 29)
    expect(text).toBe('alex (29 years old)')
})

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Alex', 24);
    expect(text).toBe('alex (24 years old)')
})

test('should click around',async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920, 1080']
    })
    const page = await browser.newPage();
    await page.goto('E:/projects/js-testing-introduction/index.html')
    await page.click('input#name')
    await page.type('input#name', 'Alex')
    await page.click('input#age')
    await page.type('input#age', '24')
})