// for(let i=0; i<10; i++){
//     console.log(i);
// }

//WAP to print only even numbers

// for(let i=0; i<=10; i+=2){
//     console.log(i);
// }

//for of loop
const nums=[3, 4, 5, 6, 7, 8];
console.log('for of loop');

for(let n of nums){
    console.log(n);
}

// while loop
let a=10;
while(a<15){
    console.log(a);
    a++;
}

// do-while loop
console.log('do-while loop');

let b=10;
do{
    console.log(b);
    b++;
}while(b>20);

// WAP to check if a number is prime or not

let c=5;
let prime=true;
for(i=2; i<=c/2; i++){
    if(c % i===0){
        console.log('not prime');
        prime=false;
        break;
    }
}
if(prime) console.log('prime');
