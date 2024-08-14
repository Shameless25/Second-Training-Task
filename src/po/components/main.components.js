class MainComponents{

    constructor() {
       this.selectors = {
        textfield: `[name="PostForm[text]"]`,
        dropbash:`#select2-postform-format-container`,
        optionbash:`//li[contains(text(), "Bash")]`,
        dropdown:`//div[@class="form-group field-postform-expiration"]`,
        options:'//li[contains(text(), "10 Minutes")]',
        pastefield:`#postform-name`,
        button:`.btn.-big`,
        infocheck:`ol.bash`,
        bashstatus:`[href="/archive/bash"]`,
        titlecheck:`div.info-top`
       }
    }
    item(el){
        return $(this.selectors[el]);
    }
}

export default MainComponents;