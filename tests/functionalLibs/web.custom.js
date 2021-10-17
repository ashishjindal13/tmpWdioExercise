var Selector = require('../files/locators/common').getSelector;
var action = require('../functionalLibs/web.action');

module.exports={
    removeLowestPriceFromCart: (element1,element2) => {
        const cartItems= $$(Selector['CartItems'])
        let lowestPrice=0;
        let counter=0;
        let lowestPriceCounter=1;
        cartItems.forEach(element => {
            counter++;
            const currentItemPrice=element.getText();
            if ( currentItemPrice < lowestPrice){
                lowestPrice=currentItemPrice;
                lowestPriceCounter=counter+1;
            }
            if (counter==cartItems.length){
                const sel=Selector['CartItemsRemove'] + "["+lowestPriceCounter+"]";
                action.ClickWithLocator(sel);
            }
    });
}
}