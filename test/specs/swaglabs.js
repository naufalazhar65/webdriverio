describe("Functional Test", () => {

  it("Test Login", async () => {
    // await browser.setWindowSize(1338, 913)
    await browser.url("https://www.saucedemo.com/")
    await expect(browser).toHaveUrl("https://www.saucedemo.com/")
    await browser.pause(2000);
    const usernameInput = await browser.$('#user-name');
    await usernameInput.setValue('standard_user');

    const passwordInput = await browser.$('#password');
    await passwordInput.setValue('secret_sauce');

    const loginButton = await browser.$('#login-button');
    await browser.pause(2000);
    await loginButton.click();

    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await expect(browser).toHaveTitle('Swag Labs');
  });

  it("Test Product Sort By", async () => {
    await expect(browser).toHaveUrlContaining("/inventory.html")
    const sortAZOption = await $('//option[@value="az"]');
    const sortZAOption = await $('//option[@value="za"]');
    const sortLHOption = await $('//option[@value="lohi"]');
    const sortHLOption = await $('//option[@value="hilo"]');
    await expect(sortAZOption).toBeDisplayed();
    await expect(sortZAOption).toBeDisplayed();
    await expect(sortLHOption).toBeDisplayed();
    await expect(sortHLOption).toBeDisplayed();

    // Test A to Z sort
    await sortAZOption.click();
    await browser.pause(2000);
    const productsAZ = await $$('.inventory_item_name');
    const firstProductAZ = await productsAZ[0].getText();
    const lastProductAZ = await productsAZ[productsAZ.length - 1].getText();
    const compareResultAZ = firstProductAZ.localeCompare(lastProductAZ, 'en', { sensitivity: 'base' });
    await expect(compareResultAZ).toBeLessThan(0);

    // Test Z to A sort
    await sortZAOption.click();
    await browser.pause(2000);
    const productsZA = await $$('.inventory_item_name');
    const firstProductZA = await productsZA[0].getText();
    const lastProductZA = await productsZA[productsZA.length - 1].getText();
    const compareResultZA = firstProductZA.localeCompare(lastProductZA, 'en', { sensitivity: 'base' });
    await expect(compareResultZA).toBeGreaterThan(0);

    // Test low to high sort
    await sortLHOption.click();
    await browser.pause(2000);
    const productPricesLH = await $$('.inventory_item_price');
    const pricesArrLH = await Promise.all(productPricesLH.map(async (price) => {
      const rawPriceLH = await price.getText();
      return Number(rawPriceLH.replace('$', ''));
    }));
    const sortedPricesLH = [...pricesArrLH].sort((a, b) => a - b);
    await expect(pricesArrLH).toEqual(sortedPricesLH);

    // Test high to low sort
    await sortHLOption.click();
    await browser.pause(2000);
    const productPricesHL = await $$('.inventory_item_price');
    const pricesArrHL = await Promise.all(productPricesHL.map(async (price) => {
      const rawPriceHL = await price.getText();
      return Number(rawPriceHL.replace('$', ''));
    }));
    const sortedPricesHL = [...pricesArrHL].sort((a, b) => b - a);
    await expect(pricesArrHL).toEqual(sortedPricesHL);
  });

  it('should add item to cart', async () => {
    await browser.url('https://www.saucedemo.com/inventory.html');
    await browser.pause(2000);

    const addToCartButton = await browser.$('#add-to-cart-sauce-labs-bike-light');
    await addToCartButton.click();

    const removeButton = await browser.$('#remove-sauce-labs-bike-light');
    await expect(removeButton).toHaveText('Remove');
    await expect(removeButton).toBeDisplayed();
  });

  it('should checkout and complete purchase', async () => {
    await browser.url('https://www.saucedemo.com/cart.html');
    await browser.pause(2000);
    
    const checkoutButton = await browser.$('.checkout_button');
    await checkoutButton.click();

    const firstNameInput = await browser.$('#first-name');
    await firstNameInput.setValue('John');

    const lastNameInput = await browser.$('#last-name');
    await lastNameInput.setValue('Doe');
    
    const postalCodeInput = await browser.$('#postal-code');
    await postalCodeInput.setValue('12345');

    const continueButton = await browser.$('.cart_button');
    await browser.pause(2000);
    await continueButton.click();

    await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    
    const finishButton = await browser.$('.cart_button');
    await finishButton.click();
    await browser.pause(2000);

    const complete = await browser.$('.complete-header');
    await expect(complete).toHaveText('Thank you for your order!');
    await expect(complete).toBeDisplayed();
  });
});
