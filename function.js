// Method 1:
// Normal Function
function functionA(a, b) {
    return a + b;
}
const valueA = functionA(10, 40);
// alert(valueA)



// Method 2:
// Another Normal Function
functionB = function (a, b) {
    return a + b;
}
const valueB = functionB(10, 40);
// alert(valueB);



// Method 3:
// Arrow Function
functionC = (a, b) => {
    return a + b;
}
const valueC = functionC(10, 40);
// alert(valueC);



// Method 4:
// Inline Arrow Function
functionD = (a, b) => a + b;
const valueD = functionD(10, 40);
// alert(valueD);



// Method 5:
// if you have only one parameter, you can skip the parentheses as well:
functionE = b => 10 + b;
const valueE = functionE(40);
// alert(valueE);