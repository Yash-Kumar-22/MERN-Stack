const nums=[2,3,4,5,9,6,7,8];
for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
    
}

console.log('for of loop');


for(let n of nums){
    console.log(n);
    
};

//foreach func

console.log('for each function');

nums.forEach((n,i,a) => {console.log(n,i,a);})

// Wap to store even numbers in a new array
// Wap to store square of each number in a new array
// WAP to store numbers less than 5 in a new array

// 1
let b=[];
nums.forEach((arr)=>{
    if(arr % 2 === 0){
        b.push(arr);
    }
})
console.log(b);
