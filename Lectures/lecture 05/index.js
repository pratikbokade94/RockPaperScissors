console.log("hello duniya")

function sayMyName() {
    console.log("Pratik bokade");
}

//function call

sayMyName();


// function printCount (){
//     for(let i=1; i<=10; i++){
//         console.log(i);

//     }

// }


// printCount();

function printNumber(num){
    console.log("print Number:",num);

     
}
printNumber(5);


function addSum(a,b,c){
    let sum = a+b+c;
    return sum;


}

   let sum= addSum(1,2,3);
   console.log("sum is :",sum);


   function getFullName( firstName, lastName){
    let fullName = firstName + lastName;
    return fullName;
   }

   let  Name= getFullName("pratik", "bokade" );
   console.log( "full Name is:",Name);



