// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge (puppyAge,conversion = 7){
   return puppyAge * conversion
}
console.log(calculateDogAge(10));

/*
2. 🎖Write a function named calculateMoviesToWatch that:
    * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
    * [ ] calculates the number of movies for rest of the life (based on a constant max age).
    * [ ] Return the total number of movie you will watch.
*/
  
 function calculateMoviesToWatch (age,moviesNumber){
    const maxAge = 75;
    let  totalMovies = (maxAge - age ) * 12 * 4 * moviesNumber;
    return totalMovies
 } 
  


 /* 
3. 🎖Create a function called celsiusToFahrenheit:
    * [ ] Accepts celsius temperature as argument.
    * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/
  
function celsiusToFahrenheit (temperature){
    let fahrenheit = (temperature * 9/5) + 32;
    return `${temperature} is ${fahrenheit}`
}
  
  
/*
4. 🎖Create a function called fahrenheitToCelsius:
    * [ ] Accepts fahrenheit temperature as argument.
    * [ ] Convert it to celsius and return "NN°F is NN°C"
*/
  
function fahrenheitToCelsius (temp){
    let celcius = ((temp - 32) * 5) / 9;
    return `${temp} is ${celcius}`
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.
  
    * [ ] The function accepts two parameter x and n.
    * [ ] Return x times n
    * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/
 
  function pow (n,x){
    if (n < 0  ){
        return `The number bellow 1 is not allowed`
    } else {
        return x ** n 
    }
  }
  
/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
  and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/
  
function sumOrProductofN(num,operation){
    if (operation === "sum"){
        let sum = 0;
        for (let i = 1 ; i<= num; i++){
            sum += i;
        }
    } else if (operation === "product"){
        let product = 1
        for (let i = 1; i <= num; i++){
            product *= i
        }
        return product
    } else {
        alert("Not a valid Input")
    }
}
    
  
/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/
  
function sumOfN(n){
    let sum = 0;
    for (i = 1; i<= n;  i++){
        sum += i;
    }
    return sum;
}
  
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

function sumOfNWithFive(n){
    let sum = 0;
    for (i = 1; i<= n;  i++){
        if( i % 5 === 0 || i % 7 === 0 ){
            sum += i;
        }
    }
    return sum;
}
  
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/
  
function min (a,b){
    if ( a < b ){
        return a 
    } else{
        return b
    }
}
  
/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/
  
function typeCheck (value){
    return typeof value
};