const asciiTitle = "TASK 1";

function getName(array) {
  console.log(array);
  const candiesNumberArray = array.map((el) => el.candies);
  const namesArray = array.map((el) => el.name);
  if (namesArray.some((el) => el === null))
    throw new Error("Сталася помилка, введіть правильні дані");
  const maxCandyCount = Math.max(...candiesNumberArray);
  if (candiesNumberArray.every((el) => el === maxCandyCount))
    throw new Error("У всіх дітей однакова кількість цукерок");

  const childObj = array.find((el) => el.candies === maxCandyCount);
  console.log(1);
  return childObj.name;
}

function showName() {
  const nameList = document.getElementsByClassName("child-name");
  const candyNumberList = document.getElementsByClassName("candy-number");

  let children = [];
  for (let i = 0; i < 2; i++) {
    children.push({
      name: nameList[i].value || null,
      candies: parseInt(candyNumberList[i].value || 0),
    });
  }

  try {
    alert(`${getName(children)} має більше цукерок`);
  } catch (e) {
    alert(e.message);
  }
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
}
