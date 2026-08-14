//1d array
let restult = ["pass", "fail", "success", "failure"];


//2d array
let matrix = [
    ["pass", "fail"],
    ["success", "failure"]
];
    

for(let row of matrix){
    for(let col of row){
        process.stdout.write(col + " ");
    }  
    console.log();
}