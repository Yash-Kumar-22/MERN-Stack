const nums =[3,5,6,7,8,5];
const evenNums = nums.filter((n) => {return n%2 === 0});
console.log(evenNums);

const sqrNums= nums.map ( (n) => {return n**2});
console.log(sqrNums);

// filter all elements less than 5 
const a = nums.filter((n) => {return n<5});
console.log(a);

const prices = ['₹65.634', '₹45.234', '₹78.94', '₹23.9', '₹56.973'];
const clear = prices.map ((n) => { return parseInt(n.slice(1))});
console.log(clear);

// Reduce

const sumOfelements = nums.reduce(
    (a,b) => {
        console.log(a,b);
        return a+b;
    }
);
console.log(sumOfelements);
