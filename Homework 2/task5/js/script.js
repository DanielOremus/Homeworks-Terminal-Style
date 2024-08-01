const asciiTitle = "TASK 5";

function getAvailableVehicle(category) {
  const objArr = [
    { category: "a", availableVehicle: "мотоцикл" },
    { category: "b", availableVehicle: "легковий автомобіль" },
    { category: "c", availableVehicle: "вантажний автомобіль" },
  ];
  const searchedObj = objArr.find((el) => el.category === category);
  if (searchedObj) return searchedObj.availableVehicle;
  throw new Error("Введіть коректне значення");
}

function showVehicle() {
  const enteredCategory = document.querySelector("input").value.toLowerCase();
  try {
    alert(`Вам доступний ${getAvailableVehicle(enteredCategory)}`);
  } catch (error) {
    alert(error.message);
  }
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
}
