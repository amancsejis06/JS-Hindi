// const numArray = [1,2,3,4,5,6,7,8,9,10]

// const num_greater_than_4 = numArray.filter((num)=>{
//     return num > 4
// })
// console.log(num_greater_than_4);

const codingBooks = [
    {
        title:"Modern C",
        programming_lang:"C",
        year:"2024"
    },
    {
        title:"An Introduction to Programming and Computer Science with Python",
        programming_lang:"Python",
        year:"2023"
    },
    {
        title:"Python for Everybody",
        programming_lang:"Python",
        year:"2016"
    },
    {
        title:"Think Python",
        programming_lang:"Python",
        year:"2002"
    },
    {
        title:"Eloquent JavaScript",
        programming_lang:"Javascript",
        year:"2024"
    },
    {
        title:"JavaScript Notes for Professionals",
        programming_lang:"Javascript",
        year:"2018"
    }
    
]

console.log(codingBooks.length);

let userBooks = codingBooks.filter((bk)=>bk.programming_lang==="Python")
// console.log(userBooks.length);
userBooks = codingBooks.filter((bk)=>{return bk.year <= 2020 && bk.programming_lang ==="Javascript"})
console.log(userBooks);


