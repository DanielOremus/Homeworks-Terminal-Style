const asciiTitle = "TASK 7";

function getSeason(monthNumber) {
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      return "Зима";
    case 3:
    case 4:
    case 5:
      return "Весна";
    case 6:
    case 7:
    case 8:
      return "Літо";
    default:
      return "Осінь";
  }
}

function showSeason() {
  const enteredNumber = parseInt(document.querySelector("input").value);
  enteredNumber >= 1 && enteredNumber <= 12
    ? alert(`Цей місяць належить до пори року: ${getSeason(enteredNumber)}`)
    : alert("Помилка, введіть правильне значення");
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
}
