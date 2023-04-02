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
    await expect(complete).toBeDisplayed();
    await expect(complete).toHaveText('Thank you for your order!');
    await expect(complete).toBeDisplayed();
  });
});
