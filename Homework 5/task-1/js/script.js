const asciiTitle = "TASK -1"
const months = [
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
]

function display() {
  const container = document.getElementsByClassName("container-item")[1]
  container.innerText = ""
  const ol = document.createElement("ul")
  for (let i = 0; i < months.length; i++) {
    const li = document.createElement("li")
    li.innerText = months[i]
    ol.appendChild(li)
  }
  container.appendChild(ol)
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle)
}
