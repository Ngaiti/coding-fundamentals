// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".



function findMaleAncestor(n) { 
    return n == -3 ? "great grandfather"
    : n == -2 ? "grandfather"
    : n == -1 ? "father"
    : n == 0 ? "me!"
    : n == 1 ? "son"
    : n == 2 ? "grandson"
    : n == 3 ? "great grandson"
    : undefined; 
}


function findFemaleAncestor(n) { 
    return n == -3 ? "great grandmother"
    : n == -2 ? "grandmother"
    : n == -1 ? "mother"            
    : n == 0 ? "me!"
    : n == 1 ? "daughter"
    : n == 2 ? "granddaughter"
    : n == 3 ? "great granddaughter"
    : undefined;
}


function generation(n, g){
    return g == "m" ? findMaleAncestor(n)
    : g = "f" ? findFemaleAncestor(n)
    : undefined
}

console.log(generation(0, "m"))
