const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("numberInput");
let lengthConversionDisplay = document.getElementById("length-conversion");
let volumeConversionDisplay = document.getElementById("volume-conversion");
let massConversionDisplay = document.getElementById("mass-conversion");

convertBtn.addEventListener("click", function () {
  console.log("This is the damn convert button ");
  lengthConversion();
  volumeConversion();
  massConversion();
});

function lengthConversion() {
  const lengthValue = Number(numberInput.value);

  let lengthBaseText = ``;

  const metersToFeet = (lengthValue * 3.28084).toFixed(3);
  const feetToMeters = (lengthValue / 3.28084).toFixed(3);

  lengthBaseText = `${lengthValue} meters = ${metersToFeet} feet || ${lengthValue} feet = ${feetToMeters} meters`;

  lengthConversionDisplay.textContent = lengthBaseText;
}

function volumeConversion() {
  const volumeValue = Number(numberInput.value);

  let volumeBaseText = ``;

  const litersToGallons = (volumeValue * 0.264172).toFixed(3);
  const gallonsToLiters = (volumeValue / 0.264172).toFixed(3);

  volumeBaseText = `${volumeValue} litres = ${litersToGallons} gallons || ${volumeValue} gallons = ${gallonsToLiters} liters`;

  volumeConversionDisplay.textContent = volumeBaseText;
}

function massConversion() {
  const massValue = Number(numberInput.value);

  let massBaseText = ``;

  const kilogramsToPounds = (massValue * 2.20462).toFixed(3);
  const poundsToKilograms = (massValue / 2.20462).toFixed(3);

  massBaseText = `${massValue} kilograms = ${kilogramsToPounds} pounds || ${massValue} pounds = ${poundsToKilograms} kilograms`;
  massConversionDisplay.textContent = massBaseText;
}
