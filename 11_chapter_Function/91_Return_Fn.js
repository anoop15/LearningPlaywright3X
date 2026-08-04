function getStatusCode(code){
    if(code>= 200 && code < 300){
        return "Success";
    }
    if(code>= 400 && code < 500){
        return "Client Error";
    }   
    if(code>= 500 && code < 600){
        return "Server Error";
    }

}


console.log(getStatusCode(200)); // Success
console.log(getStatusCode(400)); // Client Error
console.log(getStatusCode(500)); // Server Error


//return nothing -- undifiend 
function logTest(name){
    console.log("Hello, ${name}");
}

logTest("Alice"); // Hello, Alice



function aa(){
    return [2,3,4,5,6,7,8,9,10];

//return {"name":"Alice","age":30,"city":"New York"};
}


