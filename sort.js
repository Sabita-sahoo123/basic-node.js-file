let a=[1,3,4,1,5,6,8,3,1]
a.sort()
console.log(a)
for(let i=0;i<a.length-1;i++){
    if(a[i]==a[i+1]){
       a.shift()
       i++;
       console.log(a)
    }
   //console.log(a) 
}
//console.log(a)