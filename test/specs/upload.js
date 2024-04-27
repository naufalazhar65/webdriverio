describe('PDF Upload Test', () => {
    
    it('should upload a file', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload')

        const filePath = '/Users/naufalazhar/Downloads/opinia-idea-1009202325403.png'
        const remoteFilePath = await browser.uploadFile(filePath)

        await $('#file-upload').setValue(remoteFilePath)
        await browser.pause(5000);
        await $('#file-submit').click()
        await browser.pause(5000);
        });
});