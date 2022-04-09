const { expectCt } = require('helmet')
const {calcTip,addAsync}=require('./math')
test('hello world',()=>{

})
// failed test

test('calc fuction return the the total money',()=>{
    const total=calcTip(10,.3)
    // if(total!==13)throw Error('error in calc the tip')
    expect(total).toBe(13)
})
// you should put pramater to test function when you work with async funcion
test('should return the sum instead of async function',(done)=>{
    const Sum=setTimeout(() => {
        expect(1).toBe(1)
        done()
    }, 1000)
})