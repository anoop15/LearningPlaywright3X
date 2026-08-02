function greet(name){
    return 'Hello,${name}';
}

const greet1 = function(name1) {
    return `Hello, ${name1}`;
}



const greet2 = (name2) => `Hello, ${name2}`;

cosnsole.log(greet1("Anoop"));
console.log(greet2("Anoop"));
console.log(greet("Anoop"));