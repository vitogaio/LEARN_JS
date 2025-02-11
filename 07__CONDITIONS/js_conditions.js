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

//   TABLE _ 42

/*
let table = document.getElementById("and");
console.log(table);*/ 

let tbodyAnd = document.getElementById("and").children[1];
let tbodyOr = document.getElementById("or").children[1];

let aValues = [true, false];
let bValues = [true, false];

for (let d of aValues) {
    for (let e of bValues) {
        let tr = document.createElement("tr");
        
        let td0 = document.createElement("td");
        td0.innerHTML = d;

        let td1 = document.createElement("td");
        td1.innerHTML = e;

        let td2 = document.createElement("td");
        td2.innerHTML = (d && e);

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);

        tbodyAnd.appendChild(tr);  
    }
}

for (let d of aValues) {
    for (let e of bValues) {
        let tr = document.createElement("tr");
        
        let td0 = document.createElement("td");
        td0.innerHTML = d;

        let td1 = document.createElement("td");
        td1.innerHTML = e;

        let td2 = document.createElement("td");
        td2.innerHTML = (d || e);

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);

        tbodyOr.appendChild(tr);  
    }
}

//  BOOLEANS _ 43