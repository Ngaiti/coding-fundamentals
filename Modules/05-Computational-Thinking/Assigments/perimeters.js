// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.

function perimeterOfSquareOrCircle(a, b){
    return a == "s" ? 4 * b
         : a == "c" ? 6.28 * b
         : undefined;
}

console.log(perimeterOfSquareOrCircle("c", 4))
console.log(perimeterOfSquareOrCircle("s", 4))

