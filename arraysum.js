//function sum(arr){
//for(let i=0;i<=n;i++){

//}

//}
//let a=[45,55,124,46,58]
//let sum=0;
//for(let i=0;i<=a.length-1;i++){
   // sum=sum+a[i];
//}
//console.log(sum)
//function arraysum(arr){
    //if(arr.length===0) return 0;
  //  return  arr[0]+arraysum(arr.slice(1));
//}
//const numbers=[1,2,3,4,5];
//console.log(arraysum(numbers))
function arraysum(arr,index=0){
    if(index>=arr.length){
     return 0;
    }
    return arr[index]+arraysum[arr,index +1]
}
const numbers=[1,2,3,4,5];
console.log(arraysum(numbers))