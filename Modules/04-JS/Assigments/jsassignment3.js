function factorial(n){
    let result = 1
    for(let x = n; x > 1; x--){
        result = result*x
    }
    return result
}


console.log(factorial(4))

