// function addNums (a,b){
//      var c=a+b;
//     console.log(c);
// }
// addNums(2,4);

// const getAvg = function(m1, m2, m3){
//     avg=(m1+m2+m3)/3;
//     // console.log(avg);
//     return avg;
// }
// const result=getAvg(86, 76);
// console.log(result);

// arrow function
const factorial = (n) => {
    let f=1;
    for(let i=2; i<=n; i++){
        f*=i;
    }
    return f;
};

const result2 = factorial(5);
console.log(result2);

