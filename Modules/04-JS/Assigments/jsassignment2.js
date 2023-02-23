function calculateAge(birthDate){
   var diffMs= Date.now() - birthDate.getTime(); 
   //Time right now - the birthdate of the person in milliseconds
   var age = new Date(diffMs) 
   // change milliseconds to a date format; JS always starts from 1970;  
     return Math.abs(age.getUTCFullYear()-1970); 
   //Minus the 1970 to get the correct number of years
}


let birthDate = new Date()
// console.log(calculateAge(new Date(1982, 11, 4)));
console.log(calculateAge(new Date("1992/10/1")));
