6.	8 kyu https://www.codewars.com/kata/even-or-odd

function evenOrOdd(number) {  
  if (number % 2===0) {  
    return "Even";   
  }    
  return "Odd";   
}

7.	8 kyu https://www.codewars.com/kata/century-from-year   
function century(year) {   
  const century = Math.ceil (year/100);    
  return century;   
}

9.	7 kyu https://www.codewars.com/kata/factorial    
function factorial(n)     
{     
  if (n < 0 || n > 12 ) throw new RangeError();     
  else if (n === 0) {     
    return 1;     
  }     
  let startingIndex = 1     
  for ( let i=1; i<=n; i++) {     
  startingIndex *= i;     
  
 }       
  return startingIndex;     
}     

10.	7 kyu https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list     
  function findDup( arr ){     
  arr = arr.slice().sort();     
  let duplicateValue;     
  for (let i = 0; i<arr.length-1; i++) {    
    if (arr[i+1] === arr[i]) {     
      duplicateValue = arr[i];     
    }      
  }     
  console.log(duplicateValue)     
  return duplicateValue;     
}



11.	6 kyu https://www.codewars.com/kata/is-a-number-prime/
function isPrime(num) {    
  if (num === 0 || num===1 || num < 0) {        
    console.log(false);        
    return false    
  }           
  else if (num===2 || num===3 || num===5 ) {    
    console.log(true);      
    return true       
  }      
  else{      
    for (let i = 2; i <= Math.sqrt(num); i++) {      
     if (num % i === 0) {        
      console.log(i)      
      console.log(false);      
       return false      
    }      
    
  }     
  }     
  console.log(true)     
  return true;     

}      
