// let arr = [1,2,3,4,5];
// console.log(arr.length)

// console.log(arr[2]=66);
// arr[4]=19;
// console.log(arr);


// 1) print array

// let arr = [1,2,3,4,5];
// for(i = 0; i<arr.length; i++){
//     console.log(arr[i]);

// }

//  using for of loop 

// let arr = [1,2,3,4,5];

// for(let xyz of arr){
//     console.log(xyz);
// }


//  Average of array

// let arr = [ 85,97,44,37,76,60]
// let sum =0;

// for(let val of arr){
//     sum = sum + val;
// }
// let avg= sum / arr.length;
// console.log(avg);


// second methodr

let arr = [ 85,97,44,37,76,60]
let sum = 0;
for(let i =0; i<arr.length; i++){
    sum = sum + arr[i];
  
}

let avg = sum /arr.length;
console.log(avg);

