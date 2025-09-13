// let obj = {
//     name: "Pratik",
//     age:"19",
//     height:5.5
// }

// console.log(obj);

// let arr = [ 1,2,3,4,5];
// console.log(arr);

// Accsing elements
// let brr = [1, "pratik", 3, "bokade", "shahuraj" ]
// console.log(brr[3]);


// Push / pop
// let x = [1, 2, "pratik"]
// x.push("bokade");
// x.push(5,6);

// x.slice(2,4);

// console.log(x.slice(2,4));
// console.log(x);


// let y =  [ 1, 2, 'pratik', 'bokade', 5, 6 ];
// y.splice(1,0, "xyz");
// console.log(y);


// let arr = [10,20,30,];
//  let x=arr.map((number) => {
//     return number*number;

// })
// console.log(x);


// let brr = [10,20,40,];
//  let c =brr.map((number) => {
//     return number + 1;

// })
// console.log(c);


// let y =  [ 1, 2, 'pratik', 'bokade', 5, 6 ];
//  let ans= y.filter((value) =>{


//     return value%2==0;
// }
// );

// console.log(ans);


// let arr = [1, 2, 3,4, 5];
// let length = arr.length;
// console.log("length:",length);


// let arr = [1, 2, 3,4, 5];
// console.log( "length of araay:",arr.length);



// let arr = [1, 2, 3,4, 5];
// arr.forEach((value, index) => {
//     console.log("number:", value, "index:",index);

// })

// let arr = [1, 2, 3,4, 5];
// let length= arr.length;
// for(let index = 0; index<length; index++){
//     console.log(arr[index]);
// }


let arr = [1, 2, 3,4, 5];
let len = arr.length;


 function getsum(arr){
let sum = 0;

arr.forEach((value)=>{
    sum = sum +value;

}

)

return sum;
 }


 let totalSum = getsum(arr);
 console.log(totalSum);
















