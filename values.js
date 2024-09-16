let fruit = ['orange','apple','graps']
let val = ''
let acces = Object.values(fruit)
for(let value of acces){
   val = val + value +' '
}
console.log(val);
let foreach = fruit.forEach(value => {console.log(value);
})

