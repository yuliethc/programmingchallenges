/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}


*/

function century(year) {

    let centuryCount = 0;
    while (year > 0){
      year = year - 100;
      centuryCount = centuryCount + 1;
    }
    return centuryCount;
  
  }