var Selector = require('../files/locators/common').getSelector;
const chai = require('chai');
const cExpect = chai.expect;

module.exports={
    click: (element) => {
        try{
            browser.$(Selector[element]).isDisplayed();
            browser.$(Selector[element]).click();        
        }
        catch (error){
            cExpect.fail(1,2,error);            
        }
    },
    ClickWithLocator: (element) => {
        try{
            browser.$(element).isDisplayed();
            browser.$(element).click();        
        }
        catch (error){
            cExpect.fail(1,2,error);            
        }
    },
    selectByText: (text,element) => {
        try{
            browser.$(Selector[element]).isDisplayed();
            browser.$(Selector[element]).selectByVisibleText(text);    
        }
        catch (error){
            cExpect.fail(1,2,error);            
        }
    },
    enter: (text,element) => {
        try{
            browser.$(Selector[element]).isDisplayed();
            browser.$(Selector[element]).setValue(text);
            const valSelected = $(Selector[element]).getValue();
            expect(valSelected.toLowerCase()).toEqual(text.toLowerCase());            
        }
        catch (error){
            cExpect.fail(1,2,error);            
        }
    },
    wait: (vTime) => {
        try{
            browser.pause(vTime);
        }
        catch (error){
            cExpect.fail(1,2,error);            
        }
    }

}