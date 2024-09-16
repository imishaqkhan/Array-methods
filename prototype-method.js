Array.prototype.myUcase = function(){
    for (let i=0; i< this.length;i++){
        this[i] = this[i].toUpperCase();
    }
}
let fruit = ['orange','apple','graps']
fruit.myUcase()
console.log(fruit);

