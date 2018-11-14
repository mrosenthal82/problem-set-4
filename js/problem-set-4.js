/*
 * Hello. 2 points.
 */

function hello() {

  let ex = document.getElementById("output1");
  ex.innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  name = prompt("Enter your name");
  let ex = document.getElementById("output2");
  ex.innerHTML = "Hello, " + name + "!";

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let fahr = (cels*(9/5)+32).toFixed(2);
  let ex = document.getElementById("output3");
  ex.innerHTML = cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let cels = ((fahr-32)*(5/9)).toFixed(2);
  let ex = document.getElementById("output4");
  ex.innerHTML = fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = Math.floor(inches/63360);
  let milesExtra = inches%63360;
  let yards = Math.floor(milesExtra/36);
  let yardsExtra = milesExtra%36;
  let feet = Math.floor(yardsExtra/12);
  let feetExtra = yardsExtra%12;
  inches = (feetExtra).toFixed(0);
  let ex = document.getElementById("output5");
  ex.innerHTML = `Miles: ${miles}<br/>Yards: ${yards}</br>Feet: ${feet}<br/>Inches: ${inches}`;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let km = Math.floor(centimeters/100000);
  let kmExtra = centimeters%100000;
  let meters = Math.floor(kmExtra/100);
  let metersExtra = kmExtra%100;
  centimeters = (metersExtra).toFixed(0);
  let ex = document.getElementById("output6");
  ex.innerHTML = `Kilometers: ${km}<br/>Meters: ${meters}<br/>Centimeters: ${centimeters}`;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let gal = Math.floor(fluidOunces/128);
  let galExtra = fluidOunces%128;
  let quarts = Math.floor(galExtra/32);
  let quartsExtra = galExtra%32;
  let pints = Math.floor(quartsExtra/16);
  let pintsExtra = quartsExtra%16;
  let cups = Math.floor(pintsExtra/8.11537);
  let cupsExtra = pintsExtra%8.11537;
  fluidOunces = (cupsExtra).toFixed(0);
  let ex = document.getElementById("output7");
  ex.innerHTML = `Gallons: ${gal}<br/>Quarts: ${quarts}<br/>Pints: ${pints}<br/>Cups: ${cups}<br/>Fluid Ounces: ${fluidOunces}`;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let tons = Math.floor(ounces/32000);
  let tonsExtra = ounces%32000;
  let pounds = Math.floor(tonsExtra/16);
  let poundsExtra = tonsExtra%16;
  ounces = (poundsExtra).toFixed(0);
  let ex = document.getElementById("output8");
  ex.innerHTML = `Tons: ${tons}<br/>Pounds: ${pounds}<br/>Ounces: ${ounces}`;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let dollars = Math.floor(pennies/100);
  let dollarsExtra = pennies%100;
  let quarters = Math.floor(dollarsExtra/25);
  let quartersExtra = dollarsExtra%25;
  let dimes = Math.floor(quartersExtra/10);
  let dimesExtra = quartersExtra%10;
  let nickels = Math.floor(dimesExtra/5);
  let nickelsExtra = dimesExtra%5;
  pennies = (nickelsExtra).toFixed(0);
  let ex = document.getElementById("output9");
  ex.innerHTML = `Dollars: ${dollars}<br/>Quarters: ${quarters}<br/>Dimes: ${dimes}<br/>Nickels: ${nickels}<br/>Pennies: ${pennies}`;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let quarters = Math.floor(amount/.25);
  let quartersExtra = amount%.25;
  let dimes = Math.floor(quartersExtra/.10);
  let dimesExtra = quartersExtra%.10;
  let nickels = Math.floor(dimesExtra/.05);
  let nickelsExtra = dimesExtra%.05;
  let pennies = (nickelsExtra/.01);
  let coins = (quarters+dimes+nickels+pennies).toFixed(0);
  let ex = document.getElementById("output10");
  if (coins = 1){
    ex.innerHTML = `${coins} coin.`;
  } else {
    ex.innerHTML = `${coins} coins.`;
  }

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
