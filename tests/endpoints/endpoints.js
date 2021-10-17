module.exports = {
    getEndpoint: job => {
        let endPoint = {};
        if (job === 'dev') {
            endPoint['Application'] ='https://www.dev.saucedemo.com/';
        }
        else {
            endPoint['Application'] ='https://www.saucedemo.com/';
        }
        return endPoint;
    }
};
