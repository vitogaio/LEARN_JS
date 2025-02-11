"use strict";
 
/*   ARRAY _ 35
..................................................*/
let persons = ["Lamon", 12+3];
console.log(persons);

let newStudent = "Piero";
persons.push(newStudent); // am Schluss hinzufügen
console.log(persons);


/*   ARRAY _ 36 (add, delete ...)
..................................................*/
console.log(persons.length);
// console.log("there are " + persons.length + " people here.");

console.log("i am from " + persons[0]);
persons.unshift(newStudent); // am Anfang hinzufügen
console.log(persons);
persons.pop(); // entfernt die letzte Person
console.log(persons);
persons.shift(persons); // entfernt erstes Element 

let removedPerson = persons.shift();
console.log(removedPerson);


/*   ARRAY _ 37 (for Schleife)
..................................................*/

let studenti = ["Luca", "Bepi", "Alvise"];

// stelle mir alle Studenten in eine Variable
let output = "There are all these students: ";

for (let student of studenti) {
     output = output + student + ", ";
     console.log(student);
}
console.log(output);


/*   ARRAY _ 38 (Mehrdimensionale Arrays)
..................................................*/

let scolari = [
    ["Franco", "Michele"],
    ["Andrea", "Vittorio"],
    ["", "", "",]
];
console.log(scolari[1][1]);

for (let corsi of scolari) {
    for (let scolare of corsi) {
        console.log(scolare);
 }
}
