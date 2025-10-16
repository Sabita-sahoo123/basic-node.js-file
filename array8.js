function reverseArray(arr){
    let n=arr.length;
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i]; //temp=1, temp=2
    arr[i]=arr[n-i-1];  //arr[i]=7,6
    arr[n-i-1]=temp;   //arr[n-i-1]=1,2
}
}
const arr=[1,2,3,4,5,6,7]
reverseArray(arr);
console.log(arr.join(""))