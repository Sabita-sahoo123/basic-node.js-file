function secondgreatest(arr){
let largest=-1, secondlargest=-1;
for(let i=1;i<=arr.length;i++){
    if(arr[i]>largest){
       largest=arr[i];
    }
}
for(let i=0;i<=arr.length;i++){
    if(arr[i]>secondlargest && arr[i]!==largest)
        secondlargest=arr[i];
}
return secondlargest;
}
const num=[10, 20, 4, 556, 4891, 1,12, 45];
console.log(secondgreatest(num));

