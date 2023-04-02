
describe('Demo Test My first Test', function(){

    it('My first Test', async () => {
        browser.url('https://google.com/')
        browser.pause(2000)
        await $('[name="q"]').setValue("WebdriverIO");
    //    await $('[name="btnK"]').click();
        browser.keys('Enter')
        await $('//*[text()="WebdriverIO · Next-gen browser and mobile automation test ..."]').click();
    })
}) 