function possibleBonus(a, b) {
    for (let i = 1; i <= 6; i++) {
      a = a + 1;
      if (a === b) {
        return true;
      } 
    }
    return false;
  }
  
console.log(possibleBonus(3, 7))