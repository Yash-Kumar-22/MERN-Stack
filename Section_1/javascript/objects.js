const user = {
    name : 'Lestrade',
    email : 'lestrade@mail.com',
    password : 'abc123'
};

console.log(user.name);
console.log(user['email']);

user.password= 'xyz@123';
user.address = 'Lucknow';

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

let [a,b,c] = [3,4,5];
[a,b]= [b,a];
console.log(a,b,c);

let{email} = user;
console.log(email);

const nums= {a,b,c};
console.log(nums);
nums.c = {a : 'apple', b: 'ball'};
console.log(nums.c.b);


const smartphone = {
    brand: 'nothing',
    model: '3a',
    price: 27000,
    colors: ['white', 'black']
};

console.log(smartphone.colors[1]); //accsess 2nd color of smartphone
smartphone.colors.unshift('red');
console.log(smartphone); //add a new color before white

const smartphoneArray = [
    {
        brand: 'nothing',
        model: '3a',
        price: 27000,
        colors: ['white', 'black']
    },

    {
        brand: 'samsung',
        model: 'galaxy a14',
        price: 18000,
        colors: ['green','blue', 'black']
    },

    {
        brand: 'google',
        model: 'pixel 9',
        price: 70000,
        colors: ['black','blue' ]
    },
    
    {
        brand: 'apple',
        model: 'iphone 16',
        price: 80000,
        colors: ['black','white','gold' ]
    },

    {
        brand: 'one plus',
        model: '11R',
        price: 45000,
        colors: ['white','black','blue' ]
    },
];

// WAP to filter all samsung phones
// WAP to filter all phones with price less than 50000
// WAP to get all brand names
// WAP to filter all white phones

// 1

const z= smartphoneArray.filter((n)=>{return n.brand === 'samsung'});
console.log(z);

// 2
const d=smartphoneArray.filter((t)=>{return t.price <50000});
console.log(d);

// 3
const u= smartphoneArray.map( (o) => {return o.brand});
console.log(u);

// 4
const whitePhones = smartphoneArray.filter((phone) => {
    return phone.colors.includes('white')
});

console.log(whitePhones);








