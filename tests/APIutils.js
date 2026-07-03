const {request} = require('@playwright/test');

class APIutils{
    constructor(apiContext){
        this.apiContext = apiContext;
    }
    async getToken(loginRequest){
       
        const res = await this.apiContext.post('/api/ecom/auth/login',{
            data: loginRequest,
        });
        const resData = await res.json();
        console.log(resData);
        return resData.token;
    }
}

module.exports = {APIutils};