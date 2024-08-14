import MainComponents from './../components/main.components.js';

class MainPage {
    constructor() {
        this.mainSelectors = new MainComponents();
    }

    async open() {
        await browser.url('https://pastebin.com/');
    }
}

export default MainPage;