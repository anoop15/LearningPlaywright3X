let scores=[45,82,91,60,73];
let grades = scores.map(item => item>=60 ? "pass" : "fail");
console.log(grades);

//Map will be use for transforming each element of an array into a new value

let passing= scores.filter(s => s>=70);
console.log(passing);