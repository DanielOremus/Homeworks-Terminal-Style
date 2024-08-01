const asciiTitle = "TASK 3";

function generateNumber(min = 1, max = 5) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function checkNumber(enteredNumber) {
  return randomNumber === enteredNumber ? true : false;
}

function showResult() {
  const enteredNumber = parseInt(document.querySelector("input").value || 1);
  triesCount++;
  if (checkNumber(enteredNumber)) {
    alert(
      `Вітаю, ви вгадали. Загадане число: ${enteredNumber}. Генеруєм нове число`
    );
    triesCount = 0;
    randomNumber = generateNumber();
    return;
  }
  if (triesCount >= 2) {
    alert(
      `У вас закінчились спроби. Загадане число було ${randomNumber}, ми генеруєм нове число`
    );
    triesCount = 0;
    randomNumber = generateNumber();
    return;
  }
  alert("Спробуйте ще раз!");
}

let randomNumber;
let triesCount = 0;

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
  setTimeout(() => {
    randomNumber = generateNumber();
    alert("Ми згенерували число, спробуйте його вгадати");
  }, 10);

  // while (true) {
  //   if (document.getElementsByClassName("task")[0].innerText === asciiTitle) {
  //     resolve();
  //     break;
  //   }
  // }
}

// fontLoaded().then(() => {

// });
// window.onload = () => {
//
// };
