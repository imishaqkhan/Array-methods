let fruit = ['orange','apple','graps','orange','apple','graps','apple','graps']
let fruitcount= fruit.reduce((accumulator,fruit) => {
    accumulator[fruit] = (accumulator[fruit] || 0) +1
    return accumulator
},{})
console.log(fruitcount);

let num = [1,2,3,4,5,6]
let newnum = num.reduce((accumulator, num)=> accumulator + num,0)
console.log(newnum);

