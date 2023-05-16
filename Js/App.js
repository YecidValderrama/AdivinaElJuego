const StartGame = document.getElementById("StartGame");
const titleGame = document.getElementById("titleGame");
const textGame = document.getElementById("textGame");
const Reset = document.getElementById("Reset");
const inputRangeAndButton = document.getElementById("inputRangeAndButton");
const inputUserAndBurtton = document.getElementById("inputUserAndBurtton");
const Validate = document.getElementById("Validate");
const status = document.getElementById("status");

function resetGame() {
  location.reload();
}
function getRandomNumber(min, max) {
  return (numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min);
}

Reset.addEventListener("click", resetGame);

Validate.addEventListener("click", function () {
  const NumberUser = parseInt(document.getElementById("InputUser").value);

  if (NumberUser > numberToGuess) {
    document.getElementById("status").textContent = "Esta por debajo";
    document.getElementById("InputUser").value = "";
  } else if (NumberUser < numberToGuess) {
    document.getElementById("status").textContent = "Esta por encima";
    document.getElementById("InputUser").value = "";
  } else if (NumberUser === numberToGuess) {
    document.getElementById("status").textContent =
      "¡Felicidades! Has ganado con el numero" + " " + numberToGuess;
    document.getElementById("InputUser").value = "";
    setTimeout(resetGame, 7000);
  }
});

StartGame.addEventListener("click", function () {
  const initialNumber = parseInt(
    document.getElementById("initialNumber").value
  );
  const finalNumber = parseInt(document.getElementById("finalNumber").value);

  if (
    isNaN(initialNumber) ||
    isNaN(finalNumber) ||
    initialNumber < 0 ||
    finalNumber < 0 ||
    initialNumber >= finalNumber
  ) {
    document.getElementById("status").textContent =
      "Por favor, asegúrate de ingresar un rango válido para poder jugar. ¡Anímate a probar de nuevo!";
  } else {
    document.getElementById("status").textContent = "";
    titleGame.textContent = "¡Adivina el número!";
    textGame.textContent = "Tendrás que adivinar un número entre " + initialNumber + " " + "y" + " " + finalNumber;
    inputRangeAndButton.style.display = "none";
    inputUserAndBurtton.style.display = "flex";
    getRandomNumber(initialNumber, finalNumber);
  }
});
