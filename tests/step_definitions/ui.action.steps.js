const { Given, When, Then } = require("cucumber");
var action = require('../functionalLibs/web.action');
var customAction = require('../functionalLibs/web.custom');

Then(/.*click.*\"([^\"]*)\".*$/, (element) => {
    action.click(element);
});

Then(/.*enter.*\"([^\"]*)\" in \"([^\"]*)\".*$/, (text,element) => {
    action.enter(text,element);
});

Then(/.* select by text (.*) in (.*)$/, (text,element) => {
    action.selectByText(text,element);
});

Then(/.* remove.*lowest.*cart.*$/, () => {
        customAction.removeLowestPriceFromCart("CartItems","CartItemsRemove");
});