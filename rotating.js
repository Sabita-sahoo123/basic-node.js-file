//arr=[1,2,3,4,5,6]
function rotate(arr, d){
    let n=arr.length;
   
   for(let i=0;i<d;i++){
    let last=arr[i];
    for(let j=0;j<n-1;j++){
        arr[j]=arr[j+1];
        console.log(arr)
    }
    arr[n-1]=last;

   }
}
let arr=[1,2,3,4,5,6];
d=2;
rotate(arr,d)
console.log(arr.join(" "))
