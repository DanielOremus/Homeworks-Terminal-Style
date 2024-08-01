const asciiTitle = "TASK 6";

function getDayName(index) {
  const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];
  return days[index - 1];
}

function showDayName() {
  const enteredNumber = parseInt(document.querySelector("input").value);
  enteredNumber >= 1 && enteredNumber <= 7
    ? alert(getDayName(enteredNumber))
    : alert("Помилка, введіть правильне значення");
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
}
