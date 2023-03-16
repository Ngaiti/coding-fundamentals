function getDaysDifference(a, b) {

    var aMs = a.getTime();
    var bMs = b.getTime();
    var differenceMs = bMs - aMs;
    return Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  }

 let a = new Date('2021-01-01')
 let b = new Date('2022-01-15')
 let getDays = getDaysDifference(a, b)
 
 console.log(getDays)