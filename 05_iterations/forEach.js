const coding = ['C','C++','Python','Java']

// coding.forEach(function (item){
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach((item,index,coding)=>{
//     console.log(item,index,coding);
    
// })

const myCoding = [
    {
        language:"Python",
        file:"py"
    },
    {
        language:"Java",
        file:"java"
    },
    {
        language:"C++",
        file:"cpp"
    },
    {
        language:"Ruby",
        file:"rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language,item.file);
    
    
})