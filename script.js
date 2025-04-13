const convertBtn = document.getElementById("convert-btn");
const valueInput = document.getElementById("numberInput").value;
let lengthConversion = document.getElementById("length-conversion");
let volumeConversion = document.getElementById("volume-conversion");
let massConversion = document.getElementById("mass-conversion");

convertBtn.addEventListener("click", function () {
  console.log("This is the damn convert button ");

  volumeConversion.textContent = "This is volume conversion";
  lengthConversion.textContent = "This is length conversion";
  massConversion.textContent = "This is mass conversion";
});

function metersToFeet(meters) {}
function feetToMeters(feet) {}
function litersToGallons(liters) {}
function gallonsToLiters(gallons) {}
function kilogramsToPounds(kilograms) {}
function poundsToKilograms(pounds) {}
