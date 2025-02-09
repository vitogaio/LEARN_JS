"use strict";

//   CONTROL _ 39

let a = 5;

if (a < 10) {
    console.log ("The number is smaller");
} else {
    console.log("th number is bigger");
}



//   BOOLEANS (BEDINGUNG) _ 40

let b = true;
let c = true;

if(b && c) {
    console.log("if wird ausgeführt") ;
} 

let x = 15;
// let y = x > 10;
// let z = x < 20;

if(x > 10 && x < 20) { // && = UND, beide Bedingungen müssen erfüllt sein
}

if(x < 10 || x < 20) { // || = ODER, eine der beiden Bedingungen muss erfüllt sein
    console.log("both are true");
}


//   ELSE IF _ 41

let getAbitanti = function(city) {

    if(city == "Milano") {
    return 1362000;
     } else if (city == "Venezia"){
    return 254014;
     } else if (city == "Bologna") {
    return 390608;
    }
}

console.log(getAbitanti("Milano"));
console.log(getAbitanti("Venezia"));