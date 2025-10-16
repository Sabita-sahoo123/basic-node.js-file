function calculator(a,b,operator){
    if(operator==="+")return a+b;
     if(operator==="-")return a-b;
       if(operator==="*")return a*b;
       if(operator==="/")return a/b;
if(operator==="**")return a**b;
if(operator==="%")return a%b;


}
 console.log(calculator(3,7,"+"));
 console.log(calculator(9,5,"-"));
 console.log(calculator(5,5,"*"))
console.log(calculator(10,2,"/"))
 