const myNums =[1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc,curval){
//     return acc+curval
// },0)

// const myTotal = myNums.reduce((acc,curr_val)=> acc+curr_val,0)
// console.log(myTotal);

const myShoppingCart = [
    {
        item:"Oil",
        price:150
    },
    {
        item:"Shop",
        price:50
    },
    {
        item:"Biscuit",
        price:115
    },
    {
        item:"Surf",
        price:205
    }
]

const totalToPay = myShoppingCart.reduce((acc,product)=>product.price + acc,0)

console.log(totalToPay);
