const asciiTitle = "TASK 8"
let attemptsNumber = 3
let checkedNumbers = []

function onStart() {
  const inputs = document.querySelectorAll("input")
  const min = parseInt(inputs[0].value)
  const max = parseInt(inputs[1].value)
  if (!max || !min) {
    alert("Введіть коректні числа")
    return
  }
  display(min, max)
}

function guessNumber(min, max) {
  let computerNumber
  do {
    computerNumber = min + Math.floor(Math.random() * (max - min + 1))
  } while (checkedNumbers.includes(computerNumber))

  checkedNumbers.push(computerNumber)

  return computerNumber
}

function display(min, max) {
  let userAns, compNumber

  do {
    compNumber = guessNumber(min, max)

    userAns = confirm(`Ваше число ${compNumber}?`)
    if (checkedNumbers.length === max - min + 1 && !userAns) {
      resetData()
      alert(
        `Щось ви халтурите. Ми назвали всі числа в діапазоні ${min} - ${max}`
      )
      return
    }
    attemptsNumber--
  } while (!userAns && attemptsNumber)

  if (userAns) {
    alert("Я вгадав. За комп'ютерами майбутнє!")
  } else {
    alert("У мене закінчились спроби, ви виграли!")
  }
  resetData()
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle)
}

function resetData() {
  attemptsNumber = 3
  checkedNumbers = []
}
