const {test,expect,request} = require('@playwright/test');

import {LoginRequest} from './LoginRequest';
import {APIutils} from './APIutils';

test('LoginAPI', async()=>{
    const req =  await request.newContext({baseURL:'https://rahulshettyacademy.com'});
    const loginRequest = await new LoginRequest('venubabu.pinninty@gmail.com', 'Kstewart@7');
    const apiUtils = await new APIutils(req);
    const token = await apiUtils.getToken(loginRequest);
    console.log(token);
});