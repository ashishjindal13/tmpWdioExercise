const { Given, When, Then } = require("cucumber");
var app = require('../functionalLibs/web.navigate');

Then(/.* navigate .* page of (.*)$/, (url) => {
    app.navigate(url);
});


Then(/.* close .*$/, () => {
    app.close();
});