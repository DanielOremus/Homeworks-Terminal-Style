const terminal = document.getElementById("terminal")
const commandLine = document.getElementById("command-line")
const resultLines = document.getElementById("result-lines-container")
const typeLine = document.getElementById("type-line")
const cursor = document.getElementById("cursor")
const textArea = document.getElementById("textarea")

const errorPrefix = "[Error]"

textArea.addEventListener("keypress", (event) => {
  // -- preventing default
  if (event.keyCode === 13) {
    event.preventDefault()
  }
})
document.addEventListener("keyup", (event) => {
  // --- execute command when Enter is pressed
  const key = event.keyCode
  if (key === 13) {
    executeCommand(textArea.value)
  }
})

function fontLoaded() {
  // --- calling, when font is loaded
  document.getElementById("title").innerText = render4HTML(title)
}

function getTextSpans() {
  //--- get user typed symbols
  const allSpans = [...typeLine.querySelectorAll("span")]
  return allSpans.filter((el) => el.hasAttribute("data-text"))
}

function changeText(element, event) {
  // --- on text change (adding text, deleting text)
  console.log(event)
  const cursorPos = textArea.selectionStart

  switch (event.inputType) {
    case "insertText":
      {
        const previousSpan = getTextSpans()[cursorPos - 1]

        let newSymbol = event.data
        const span = document.createElement("span")

        if (newSymbol === " ") {
          span.setAttribute("data-text", "&nbsp;")
          span.innerText = "\u00a0"
        } else {
          span.setAttribute("data-text", newSymbol)
          span.textContent = newSymbol
        }

        typeLine.insertBefore(span, previousSpan)
        if (cursorPos !== element.value.length) {
          let e = new Event("pressingSideArrows")
          e.keyCode = 37
          moveCursor(element.value.length, cursorPos, e)
        }
      }

      break

    case "deleteContentBackward":
      {
        getTextSpans()[cursorPos].remove()
      }
      break
    case "deleteContentForward":
      {
        getTextSpans()[cursorPos].remove()
        if (cursorPos !== 0) {
          let e = new Event("pressingSideArrows")
          e.keyCode = 37
          moveCursor(element.value.length, cursorPos, e)
        }
      }
      break
  }
  if (element.value === "") {
    typeLine.innerText = ""
  }
}

function executeCommand(commandText) {
  textArea.value = ""
  typeLine.innerText = ""
  cursor.setAttribute("class", "cmd-cursor")
  let userCommand = commandText.split(" ").filter((el) => el !== "")
  console.log(userCommand)
  const commandObj = commands.find((el) => el.command === userCommand[0])
  if (!commandObj) {
    addUserCommandLine(userCommand[0])
    addTextToShowLine(`${errorPrefix} Command "${userCommand[0]}" not found!`, {
      color: "red",
    })
    return
  }
  const arg = parseInt(userCommand[1]) || null
  if (commandObj.hasArg) {
    if (!arg) {
      addUserCommandLine(`${commandObj.command}`)
      //Has arg?
      addTextToShowLine(
        `${errorPrefix} Wrong number of arguments. Command "${commandObj.command}" expects 1, got 0`,
        { color: "red" }
      )
      return
    }
    switch (
      commandObj.command //-- check if command has arg. If not - show error
    ) {
      case "homework":
        {
          if (!homeworksArr.includes(arg)) {
            addUserCommandLine(`${commandObj.command} ${arg}`)
            addTextToShowLine(
              `${errorPrefix} Homework "${arg}" not found! Type "homeworks" to see a list`,
              { color: "red" }
            )
            return
          }
        }
        break
      case "task":
        {
          if (!tasksArr.includes(arg)) {
            addUserCommandLine(`${commandObj.command} ${arg}`)
            addTextToShowLine(
              `${errorPrefix} Task "${arg}" not found! Type "tasks" to see a list`,
              { color: "red" }
            )
            return
          }
        }
        break
    }
  }
  commandObj.func.call(this, userCommand.join(" "), arg) //--- calling command function
}

function addTextToShowLine(textToShow, styleObj) {
  //add result text line
  const p = document.createElement("p")

  p.innerText = textToShow
  for (const fieldName in styleObj) {
    if (Object.hasOwnProperty.call(styleObj, fieldName)) {
      p.style.setProperty(fieldName, styleObj[fieldName])
    }
  }
  resultLines.appendChild(p)
  window.scrollTo(0, document.body.scrollHeight)
}
function addUserCommandLine(userCommand) {
  // add user's command text line
  console.log(userCommand)
  const p = document.createElement("p")
  p.innerText = `root:~$ ${userCommand}`
  resultLines.appendChild(p)
  window.scrollTo(0, document.body.scrollHeight)
}

function moveCursor(charactersNumber, cursorPos, event) {
  console.log(event)
  console.log(charactersNumber)
  console.log(cursorPos)
  console.log(cursorPos === charactersNumber)

  switch (event.keyCode) {
    case 37:
    case 39:
      {
        let textSpans = getTextSpans()
        textSpans.forEach((el) => el.removeAttribute("class"))
        cursor.removeAttribute("class")
        console.log("Cursor pos" + cursorPos)

        if (cursorPos === charactersNumber) {
          //Is cursor in the end?
          console.log(123)

          cursor.setAttribute("class", "cmd-cursor")
          return
        } else console.log(456)

        //---------------------------------------------------------------------------

        let cursorSpan = textSpans[cursorPos]
        console.log(cursorSpan)

        cursorSpan.setAttribute("class", "cmd-cursor")
      }
      break
  }
}
