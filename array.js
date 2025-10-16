//let obj1={name:"sabita",id:"65"}
//let obj2={age:"19",address:"bls"}
//let a=[obj1,obj2,"2301297065"]
//console.log(a);
//let lst=a.pop()
//console.log("after removing last:" + a);
let A={a:45,b:3}
let B={c:8,e:65}
let C={name:"sabita",age:19}
let a=[A,B,C,d=56]
console.log(a);
for( let i=1;i<=4;i++){
let lst =a.pop()
console.log("after removing last:",lst);
}
a.push("e=3")
console.log("add new element at end:" ,a )
console.log(a);