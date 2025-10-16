function check(){
    let count=0;
    return function(){
        count++
        console.log(count)
    }
}
check();
check();
check();