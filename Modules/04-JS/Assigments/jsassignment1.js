function sum(numbersArray){  
    let total = 0
    for(i=0; i< numbersArray.length; i++){
        total = total + numbersArray[i]
    }
    return total
}
let numbersArray= [-3, 5, 19, -11]
let total = sum(numbersArray)
console.log(total)

 