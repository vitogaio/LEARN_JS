"use strict";

// ARRAY _ 35

let persons = ["Lamon", 12+3];
console.log(persons);

let newStudent = "Piero";
persons.push(newStudent); // am Schluss hinzufügen
console.log(persons);


// ARRAY _ 36

console.log(persons.length);
// console.log("there are " + persons.length + " people here.");

console.log("i am from " + persons[0]);
persons.unshift(newStudent); // am Anfang hinzufügen
console.log(persons);
persons.pop(); // entfernt die letzte Person
console.log(persons);
persons.shift(persons); // entfernt erstes Elementet 

let removedPerson = persons.shift();
console.log(removedPerson);
