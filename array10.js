function findmajority(arr){
    let n=arr.length-1;
    for(let i=0;i<n;i++){
        let count=0;
        for(j=0;j<n;j++){
            if(arr[i]===arr[j])
                count++;
        }
        if(count>n/2){
            return arr[i]
        }
    }
    return -1;

}
let arr=[1,1,3,2,1,4,2, 1,1, 5]
console.log(findmajority(arr));