/*const callback = (value,index)=>{
    console.log(value,index);
    return value+1;
} */
/*function demo1(){
    let numbers = [10,20,30,40,50];
    const increment = numbers.filter((value)=> value % 2 == 0);
    console.log(increment);
    console.log(numbers);
}
demo1()*/
function printpyramid(){
    let row = 5;
    for(let i=1;i<=row;i++){
        console.log(" ".repeat(row-i) + "*".repeat(2*i-1));
    }

}
printpyramid()