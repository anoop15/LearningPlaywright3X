function name(){
    console.log("Hello");
}

name();


//IIFE  above is call it self function 
(function(){
    console.log("Hello");
})();


// and below is arrow function
(() => {
    console.log("Hello");
})();
