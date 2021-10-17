const config = require('../conf/local.conf').config;
const uri = config.endpoint;

module.exports={
    navigate:(url) => {
        try{
            browser.url(uri[url]);        }
        catch (error){
            console.error(error)
        }
    },
    close:() => {
        try{
            browser.closeWindow();        }
        catch (error){
            console.error(error)
        }
    }
}