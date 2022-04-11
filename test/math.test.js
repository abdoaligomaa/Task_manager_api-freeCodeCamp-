const { expectCt } = require('helmet')
const {calcTip}=require('./math')


// test(name,fn,timeout)
// describe(name,fn)

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

test('check for length of array',()=>{
    const arr=[1,2,3]
    if(arr.length!==3)throw Error('error')
})


// use the desctibe 
// we use the describe and put the relative tests in it 
// we can avoid use the describe put it is very useful to formate your code
describe('add two number',()=>{
    test('check for length of array',()=>{
        const arr=[1,2,3]
        if(arr.length!==3)throw Error('error')
    })
})

// use only to make a test only this function
test.only('calc fuction return the the total money',()=>{
    const total=calcTip(10,.3)
    expect(total).toBe(13)
})

// use skip to make all tests and skip this test
test.skip('calc fuction return the the total money',()=>{
    const total=calcTip(10,.3)
    expect(total).toBe(13)
})