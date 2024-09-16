let name = ['banana','carrot','onion']

let stringname = name.toString()
// console.log(stringname);
let newstring = name.join('-')
// console.log(newstring);

let name1 = ['john','Doe']
let name2 = ['hello','welcome']
 
let addname = name.concat(name1,name2)
// console.log(addname);

let namesplice = addname.splice(0,1)
//  console.log(namesplice);

// let addnames = name.splice(1 , 4,'how','are')
// console.log(addnames);
let arr = ['hello','how','are','you']
let slice1 = arr.slice(1, 3)
// console.log(slice1);

let array = [1,3,4,5,6,[4,5,6,7,[6,4,3]]]

let flate = array.flat(Infinity)
// console.log(flate);
// console.log(Array.from('Ishaq khan'));

const position = arr.at(-5) 
// console.log(position);
let copywithin = name.copyWithin(3,1,2)
// console.log(copywithin);
let num = [1,2,3,4,5,6,7,8,9]
let copy = num.copyWithin(3,0)
// console.log(copy);

let entries = arr.entries()
let text = "";
for(let x of entries){
    text +=  x +'<br>'
    // console.log("inside loop",text);
    
}
// console.log(text);
let val = [6,7,8,9]
function check(val){
    return val>5
    
    
}
console.log(val.every(check))
 
    