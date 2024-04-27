describe("tesss", () => {
    it("tests tesss", async () => {
      await browser.setWindowSize(1205, 907)
      await browser.url("https://trytestingthis.netlify.app/")
      await expect(browser).toHaveUrl("https://trytestingthis.netlify.app/")
      await browser.$("/html/body/div[3]/div[2]/form/fieldset/label[4]").click()
      await browser.$("#option").click()
      await browser.pause(3000);
      await browser.$("#option").setValue("option 3")
      await browser.$("#owc").setValue("option 3")
      await browser.$("/html/body/div[3]/div[2]/form/fieldset/input[9]").click()
      await browser.$("/html/body/div[3]/div[2]/form/fieldset/input[9]").setValue("Vanilla")
      await browser.$("#favcolor").click()
      await browser.$("#favcolor").setValue("#041f20")
      await browser.$("aria/This is your form title:").click()
      await browser.$("#a").setValue("100")
      await browser.$("#a").click()
    });
  });
  