describe("test", () => {
  it("tests test", async () => {
    
    await browser.setWindowSize(1184, 913)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("//*[@id=\"login\"]/button/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("//*[@id=\"content\"]/div/a/i").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
