describe("Functional Test", () => {

  it("Test Login", async () => {
    await browser.url('https://opinia.id/home');
    await browser.waitUntil(async () => (await browser.getTitle()) === 'Postingan - Opinia', {
      timeout: 10000, // Adjust the timeout as needed
      timeoutMsg: 'Title is not as expected after 10s',
    });

    await browser.click('//button[contains(text(),"Masuk")]');
    await browser.setValue('//input[@id="id-email"]', 'naufalazhar65@gmail.com');
    await browser.setValue('//input[@id="id-password"]', 'Naufal354');
    await browser.click('//button[@id="id-masuk-button"]');
    await browser.pause(5000);

    await browser.click('//button[contains(text(),"Buat Konten")]');
    await browser.pause(3000);
    await browser.click('//button[contains(text(),"Tulis")]');
    await browser.setValue('//div[contains(@class,"public-DraftStyleDefault-ltr")]', 'Hallo');
    await browser.click('//button[contains(text(),"Unggah")]');
    await browser.pause(3000);

    const filePath = '/uuusers/naufalazhar/Pictures/GIT.jpeg'; // Update with the correct file path
    await browser.uploadFile(filePath);
    await browser.pause(2000);

    await browser.click('//div[contains(@class,"DraftEditor-root") and contains(text(),"Unggah")]');
    await browser.pause(3000);
    await browser.click('//button[contains(text(),"Unggah")]');
    await browser.pause(5000);

    await browser.deleteSession();
  });
});
