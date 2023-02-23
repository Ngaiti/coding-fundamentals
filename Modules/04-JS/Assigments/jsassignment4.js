
function tetra(n){
    let l = 0
    for(i = n; i > 0 ; i--){
        l = l + (i*(i+1))/2 
    }
    return l
}

console.log (tetra(6))
