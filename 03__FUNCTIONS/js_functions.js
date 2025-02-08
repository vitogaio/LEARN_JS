"use strict";


//      ADD PARAMETER  _  15
// .........................................................
let run = function(x, y) {
     console.log("1: " + x);
     console.log("2: " + y);
}
run("Vittorino", "Veronica");



//      RETURN WERT  _  16
// .........................................................
let sum = function(a, b) {
    return a+b;
}

let result = sum(1,5);
console.log("The result is " + result);

let runTwo = function (a) {
  console.log(a);
};
let f = function () {};
runTwo(f);



//      ADD EVENTLISTENER  _  22
//.........................................................

document.getElementById("click").onclick = function () {
  alert("ti voglio bene Nikili");
};



//      HIDE AND SHOW  _  27
// .........................................................

let content = document.getElementById("box__content");

let click = (document.getElementById("box__heading").onclick = function () {
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
}, false);



//      OPTIONAL  _  27 b
// .........................................................

let heading = document.getElementById("box__heading");
heading.addEventListener("click", function () {
  let content = document.getElementById("box__content");
  content.classList.toggle("hide");

  let indicator = document.getElementById("box__indicator");
  indicator.classList.toggle("triangle");
});



//      APPEND  _  28 
//.........................................................

let buttonAdd = (document.getElementById("append").onclick = function () {
  let itemList = document.getElementById("items");

  let newItem = document.createElement("li");
  newItem.innerText = "zucchine";
  newItem.style.color = "red";

  itemList.append(newItem);
});



//      BMI RECHNER  _  31
//.........................................................

let bmiButton =
  ((document.getElementById("calculate").onclick = function () {
    let height = parseFloat(
      document.getElementById("height").value.replace(",", ".")
    );
    let weight = parseFloat(
      document.getElementById("weight").value.replace(",", ".")
    );

    let bmi = weight / (height * height);

    let resultBmi = document.getElementById("resultBmi");
    resultBmi.innerText = Math.round(bmi * 100) / 100;
  }),
  false);
