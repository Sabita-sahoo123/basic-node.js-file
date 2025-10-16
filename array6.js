function greatest(arr){
let min=arr[0];
for(let i=1;i<=arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
return min;
}
const num=[10, 20, 4, 556, 4891, 1,12, 45];
console.log(greatest(num));
