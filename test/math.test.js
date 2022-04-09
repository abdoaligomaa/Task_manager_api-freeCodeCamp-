const { expectCt } = require('helmet')
const {calcTip}=require('./math')
test('hello world',()=>{

})
// failed test
test('fail',()=>{
    throw Error('error in this function')
})

test('calc fuction return the the total money',()=>{
    const total=calcTip(10,.3)
    // if(total!==13)throw Error('error in calc the tip')
    expect(total).toBe(13)
})