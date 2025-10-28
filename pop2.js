function reverse(str){
    let arr=[]
    for(let char of str){
        arr.push(char)
    }
    let reverse=" ";
    while(arr.length>0){
        reverse+=arr.pop()
    }
    return reverse;
}
let str="hello"
console.log(reverse(str))