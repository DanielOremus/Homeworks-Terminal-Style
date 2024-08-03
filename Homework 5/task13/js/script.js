const asciiTitle = "TASK 13"
let bulletsNumber
let shipPos
const inputs = document.querySelectorAll("input")
const buttons = document.querySelectorAll("button")

function onStart() {
  bulletsNumber = parseInt(inputs[0].value)
  const width = parseInt(inputs[1].value)
  const height = parseInt(inputs[2].value)
  if (
    !bulletsNumber ||
    bulletsNumber < 0 ||
    !width ||
    width < 0 ||
    !height ||
    height < 0
  ) {
    alert("Введіть коректні числа")
    return
  }

  shipPos = placeShip(width * height)
  const elementsToChangeStatus = [
    { element: inputs[1], toDisable: true },
    { element: inputs[2], toDisable: true },
    { element: inputs[0], toDisable: true },
    { element: inputs[3], toDisable: false },
    { element: buttons[1], toDisable: false },
    { element: buttons[0], toDisable: true },
  ]

  changeElementsStatus(elementsToChangeStatus)
}
function placeShip(maxPos) {
  return 1 + Math.floor(Math.random() * maxPos)
}
function onShoot() {
  bulletsNumber--
  const userPos = parseInt(inputs[3].value)

  const elementsToChangeStatus = [
    { element: inputs[1], toDisable: false },
    { element: inputs[2], toDisable: false },
    { element: inputs[0], toDisable: false },
    { element: inputs[3], toDisable: true },
    { element: buttons[1], toDisable: true },
    { element: buttons[0], toDisable: false },
  ]
  const inputsToClear = elementsToChangeStatus
    .filter((el) => el.element.tagName === "INPUT")
    .map((el) => el.element)
  if (shipPos === userPos) {
    clearInputs(inputsToClear)

    changeElementsStatus(elementsToChangeStatus)

    alert("Вітаю, ви вгадали. Можете почати нову гру!")
    return
  } else alert(`Не вгадали, кількість снарядів: ${bulletsNumber}.`)

  if (!bulletsNumber) {
    changeElementsStatus(elementsToChangeStatus)

    clearInputs(inputsToClear) //---clearing inputs

    alert(`Снярядів більше нема. Корабель був на ${shipPos} позиції.`)
  }
}

function clearInputs(array) {
  array.forEach((el) => (el.value = ""))
}
function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle)
}

function changeElementsStatus(array) {
  for (const obj of array) {
    obj.toDisable
      ? obj.element.setAttribute("disabled", "")
      : obj.element.removeAttribute("disabled")
  }
}
