// console.log("hello world");


// function myName(){
//     console.log("Pratik bokade");
// }
// Name();


// function add(a,b){
//     sum = a+b;
//     return sum;
    
// }

// let val=add(2,2);
// console.log(val);



//   Arrow functions-----
// const arrowFunction = (a,b)=>{
//     return a+b;
// }
// let sum =arrowFunction(3,5);
// console.log(sum);



//   Example----

//  forEach 

// let num =[1, 2, 3]
// num.forEach((num)=>{

//     console.log(num*num);

// });

let arr =[1,2,3,4,5,6]
let evenArray=arr.filter((val)=>{
    return val %2 ==0;
     
}
);

console.log(evenArray);