"use strict";

// -- 22 / A D D  E V E N T L I S T E N E R
//.........................................................

document.getElementById("click").onclick = function () {
  alert("ti voglio bene Nikili");
};

/*   ADD PARAMETER
.........................................................
let run = function(x, y) {
     console.log("1: " + x);
     console.log("2: " + y);
}
run("Vittorino", "Veronica");
*/

/*  -- 16 / R E T U R N  W E R T
.........................................................
let sum = function(a, b) {
    return a+b;
}

let result = sum(1,5);
console.log("The result is " + result);
*/
/*
let run = function (a) {
  console.log(a);
};

let f = function () {};

run(f);
*/

/* -- 27 / H I D E  A N D  S H O W 
.........................................................
let content = document.getElementById("box__content");

let click = (document.getElementById("box__heading").onclick = function () {
  if (content.style.display === "none") {
    content.style.display = "flex";
  } else {
    content.style.display = "none";
  }
}, false);
*/
// -- 27 / O P T I O N AL
// .........................................................

let heading = document.getElementById("box__heading");
heading.addEventListener("click", function () {
  let content = document.getElementById("box__content");
  content.classList.toggle("hide");

  let indicator = document.getElementById("box__indicator");
  indicator.classList.toggle("triangle");
});

// -- 28 / A P P E N D
//.........................................................

let buttonAdd = (document.getElementById("append").onclick = function () {
  let itemList = document.getElementById("items");

  let newItem = document.createElement("li");
  newItem.innerText = "zucchine";
  newItem.style.color = "red";

  itemList.append(newItem);
});

// -- 31 / B M I  R E C H N E N
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
