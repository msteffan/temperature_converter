// Set this variable to a starting Fahrenheit temperature...
// var fahrenheit = 32;
//
//
// // Enter conversion code below...
// var fahrenheitToCelsius = (fahrenheit  -  32)  *  5/9;
// var fahrenheitToKelvin = (fahrenheit + 459.67) * 5 / 9;
//
// // Enter console.log statements below...
// console.log("Fahrenheit: " + fahrenheit + " degrees");
// console.log("Celsius: " + fahrenheitToCelsius + " degrees");
// console.log("Kelvin: " + fahrenheitToKelvin + " degrees");
//
// // Repeat the above for Celsius and Kelvin...
// var celsius = 100;
//
// var celsiusToFahrenheit = (celsius * 9/5) + 32;
// var celsiusToKelvin = (celsius + 273.15);
//
// console.log("Celsius: " + celsius + " degrees");
// console.log("Fahrenheit: " + celsiusToFahrenheit + " degrees");
// console.log("Kelvin: " + celsiusToKelvin + " degrees");
//
// var kelvin = 273.15;
//
// var kelvinToFahrenheit = (kelvin * 9/5) - 459.67;
// var kelvinToCelsius = kelvin - 273.15;
//
// console.log("Kelvin: " + kelvin + " degrees");
// console.log("Fahrenheit: " + kelvinToFahrenheit.toFixed(2) + " degrees");
// console.log("Celsius: " + kelvinToCelsius + " degrees");

// PART 2
// Restructure your program from PART 1 so that when you convert a temperature, that new value is stored in an array. Your array will end up looking something like this...
//
// var fahrenheitTemps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
//
// You will have similar arrays for the Celsius and Kelvin portions of your program.
//
// When you console.log the temperatures, make sure you do that by accessing the values stored in the array.

var fahrenheit = 32;
var fahrenheitTemps = [];

// Enter conversion code below...
var fahrenheitToCelsius = (fahrenheit  -  32)  *  5/9;
var fahrenheitToKelvin = (fahrenheit + 459.67) * 5 / 9;

// add temps to array
fahrenheitTemps.push(fahrenheit);
fahrenheitTemps.push(fahrenheitToCelsius);
fahrenheitTemps.push(fahrenheitToKelvin);

console.log(fahrenheitTemps)
console.log("Original Fahrenheit: " + fahrenheitTemps[0] + " degrees");
console.log("Converted to Celsius: " + fahrenheitTemps[1] + " degrees");
console.log("Converted to Kelvin: " + fahrenheitTemps[2] + " degrees");
