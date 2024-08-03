const asciiTitle = "TASK 12"

const images = [
  {
    id: 1,
    title: "lemon",
    src: "./img/lemon.png",
  },
  {
    id: 2,
    title: "orange",
    src: "./img/orange.png",
  },
  {
    id: 3,
    title: "cherry",
    src: "./img/cherry.png",
  },
  {
    id: 4,
    title: "jackpot",
    src: "./img/jackpot.png",
  },
]

function onSpin() {
  const slots = document.querySelectorAll("img")
  let idOfCurrentSlots = []
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * images.length)
    idOfCurrentSlots.push(images[index].id)
    const imgObj = images[index]
    slots[i].setAttribute("src", imgObj.src)
  }
  setTimeout(() => {
    showResult(idOfCurrentSlots)
  }, 100)
}

function showResult(idArray) {
  if (idArray.every((id, i, arr) => id === arr[0])) {
    switch (idArray[0]) {
      case 1:
        alert("Вітаємо, ви виграли 100 грн")
        break

      case 2:
        alert("Вітаємо, ви виграли 200 грн")
        break

      case 3:
        alert("Вітаємо, ви виграли 500 грн")
        break

      case 4:
        alert("ДЖЕКПОТ!!! Ось ваші 1000 грн")
        break
    }
  } else alert("Ех, не щастить вам сьогодні. Спробуйте ще раз!")
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle)
}
