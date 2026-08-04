function hasError(...code){
return codes.some(c => c >= 1);
}

hasError(1, 2, 3); // false