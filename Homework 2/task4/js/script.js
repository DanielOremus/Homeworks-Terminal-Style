const asciiTitle = "TASK 4";

function getAgeCategory(age) {
  console.log(age);

  if (age >= 0 && age < 6) {
    return "Дитина в садочку";
  }
  if (age >= 6 && age < 18) {
    return "Школяр";
  }

  if (age >= 18 && age <= 25) {
    return "Студент";
  }
  if (age > 25 && age < 65) {
    return "Працівник";
  }

  if (age >= 65) {
    return "Пенсіонер";
  }
  throw new Error("Помилка! Введіть коректне значення");
}

function showCategory() {
  const userAge = parseInt(document.querySelector("input").value);
  try {
    alert(`Вікова категорія: ${getAgeCategory(userAge)}`);
  } catch (error) {
    alert(error.message);
  }
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
}
