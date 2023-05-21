// 
//  This is a testing script
//  Testing the code in local environment.
// 
// const fetch = require('./dist/index');
// console.log(fetch.getUser())

import { getUser } from '../src';

test.skip('getUser calls fetch ', async () => {
    const user = await getUser();
    
    expect(user).toBeTruthy()
});