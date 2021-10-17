
let self = {
    Username: '//*[@name="user-name"]',
    Password: '//*[@name="password"]',
    Login: '//*[@name="login-button"]',
    Sort: '//*[@data-test="product_sort_container"]',
    LowestPriceItem: '(//*[text()="Add to cart"])[last()]',
    SecondLowestPriceItem: '(//*[text()="Add to cart"])[last()]',
    ShoppingCart:'//a[@class="shopping_cart_link"]',
    CartItems: '//*[@class="inventory_item_price"]',
    CartItemsRemove:'(//*[@class="inventory_item_price"]/following-sibling::button)',
    Checkout:'//*[@name="checkout"]',
    FirstName:'//*[@name="firstName"]'
};
module.exports = {getSelector: self};