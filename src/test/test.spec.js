import MainPage from './../po/pages/main.page.js';

const mainPage = new MainPage();

describe("Pastebin Test", () =>{
    beforeEach(async () => {
        await mainPage.open();
    });
    it("Creating New PasteBin with set value", async()=>{
        const originalUrl = await browser.getUrl();
        await mainPage.mainSelectors.item('textfield').setValue(`
            git config --global user.name  "New Sheriff in Town"
            git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
            git push origin master --force`);
        await mainPage.mainSelectors.item('dropbash').click();
        await mainPage.mainSelectors.item('optionbash').waitForDisplayed({ timeout: 5000 });
        await mainPage.mainSelectors.item('optionbash').click();
        await mainPage.mainSelectors.item('dropdown').click();
        await mainPage.mainSelectors.item('options').waitForDisplayed({ timeout: 5000 });
        await mainPage.mainSelectors.item('options').click();
        await mainPage.mainSelectors.item('textfield').setValue('how to gain dominance among developers');
        await mainPage.mainSelectors.item('button').click();
        await browser.waitUntil(async () => (await browser.getUrl()) !== originalUrl);
        expect(await mainPage.mainSelectors.item('pastefield')).toHaveText(`
            git config --global user.name  "New Sheriff in Town"
            git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
            git push origin master --force`);
        expect(await mainPage.mainSelectors.item('bashstatus')).toHaveText('Bash');
        expect(await mainPage.mainSelectors.item('titlecheck')).toHaveText('how to gain dominance among developers');
    });
});