const calcTip=(total,tip)=>{
    return total+(total*tip)
}

const addAsync=(a,b)=>{
    setTimeout(() => {
        return a+b
    }, 1000);
}

module.exports={
    calcTip,
    addAsync
}