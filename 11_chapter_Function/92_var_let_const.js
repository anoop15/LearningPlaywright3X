var a =1;
console.log(a);

//var - function scoped(), Traitor 

//define function
function myFunction() {
    console.log("Hello TTA");   
    var a=20;
    console.log(a);

    if(true){
        var a=30;
        console.log(a);
    }   
    console.log(a);
}
  

myFunction();


//let - block scoped

let a =1;
console.log(a);

//var - function scoped(), Traitor 

//define function
function myFunction() {
    console.log("Hello TTA");   
let a=20;
    console.log(a);

    if(true){
        let a=30;
        console.log(a);
    }   
    console.log(a);
}
  

myFunction();

//Not allowed to redeclare variable with let in same scope
//let nn="Anoop";
//var nn= "Anil";


//const - block scoped, cannot be reassigned
const pi= 3.14;
console.log(pi);
pi=3.14159; //error