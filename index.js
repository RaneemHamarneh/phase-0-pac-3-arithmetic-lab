
const add =(a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b)=> a*b;
const divide =(a,b)=>a/b;

function increment(n){
    return ++n;
};


function decrement(n){
    return --n;
};

const makeInt=(n)=>parseInt(n, 10);
const preserveDecimal= (n)=>parseFloat(n);

increment(n);
decrement(n);