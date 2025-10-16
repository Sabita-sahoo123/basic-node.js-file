//let arr=[19,17,16,14,2222,21]
function isprime(num){
if(num<2) return false;
for(let i=2;i<=Math.sqrt(num);i++){
if(num%i===0)return false;
}
return true;
}
function printprimeno(arr){
    const primeno = arr.filter(isprime);
    console.log(primeno)
}
let arr=[19,17,16,14,2222,21]
console.log("prime no in array")
printprimeno(arr)

