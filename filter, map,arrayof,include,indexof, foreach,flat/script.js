let name = ['mango','banana','graps','orange']
console.log( name.fill('pinapple',2,4));

// document.querySelector("#fill").innerHTML= name.fill('pinapple',2,4)

const age = [20,26,28,35,45,56]

function adult(adultage){
   return adultage >document.getElementById("checkage").value
}
// console.log(result);
function myfunction(){
    document.getElementById("#filter").innerHTML = age.filter(adult)
}


let myarr =[ [1,2],[3,4,5,6],[7,8]]
let newarr = myarr.flat()
console.log(newarr);

let flatmap = age.flatMap(x => [x,x*23] )
console.log(flatmap);

let text = ''
name.forEach(myfunction)
function myfunction(item,index){
    text = text + index +': '+ item +'\n'}
    console.log(text);
    
let includes = age.includes(35,4)   
console.log(includes);
 
const fruits =["orange","mango","apple","banana"]
 let index = fruits.indexOf("mango")
  console.log(index);
const val = "ishaqkhan"
let arr= Array.isArray(val)
console.log(arr);

 let list = fruits.keys()
let texts
for(let x of list){
    texts = texts + x +'\n'
}
console.log(texts);
let person = [
    {firstname : 'ishaq' ,lastname : 'khan'},
    {firstname : 'iqbal', lastname : 'khan'},
    {firstname : 'usman', lastname : 'ali'}
]
let fullval = person.map(getfulname)
function getfulname(item){
    return [item.firstname +' ', item.lastname].join('')
}
console.log(fullval);

let array = Array.of(23,43,45,5,6,7,8,8,9,9,6,5)
console.log(array);
