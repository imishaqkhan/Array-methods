const age = [20,26,28,35,45,56]
let slice = age.slice(1 , 3)
console.log(slice);

let reduce = slice.reduce((accumulator ,slice) => {
    return accumulator + slice
})
console.log(reduce);
