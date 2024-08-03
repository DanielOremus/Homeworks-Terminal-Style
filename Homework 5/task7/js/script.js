const asciiTitle = "TASK 7"

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle)
}

function display() {
  const paragraphNumber =
    parseInt(document.querySelector("input").value) || null
  if (!paragraphNumber || paragraphNumber < 0) {
    alert("Помилка, введіть коректне число!")
    return
  }
  const container = document.getElementsByClassName("container-item")[2]
  container.innerText = ""
  for (let i = 1; i <= paragraphNumber; i++) {
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const hr = document.createElement("hr")
    div.appendChild(h1)
    h1.innerText = `Заголовок ${i}`
    for (let j = 1; j <= i; j++) {
      const p = document.createElement("p")
      p.innerText = `Розділ ${i}, параграф ${j}`
      div.appendChild(p)
    }
    div.appendChild(hr)
    container.appendChild(div)
  }
}
