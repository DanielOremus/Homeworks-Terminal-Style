const terminal = document.getElementById("terminal");
const commandLine = document.getElementById("command-line");
const resultLines = document.getElementById("result-lines-container");
const typeLine = document.getElementById("type-line");
const cursor = document.getElementById("cursor");
const textArea = document.getElementById("textarea");

const errorPrefix = "[Error]";

textArea.addEventListener("keypress", (event) => {
  // -- preventing default
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});
document.addEventListener("keyup", (event) => {
  // --- execute command when Enter is pressed
  const key = event.keyCode;
  if (key === 13) {
    executeCommand(textArea.value);
  }
});

function fontLoaded() {
  // --- calling, when font is loaded
  document.getElementById("title").innerText = render4HTML(title);
}

function getTextSpans() {
  //--- get user typed symbols
  const allSpans = [...typeLine.querySelectorAll("span")];
  return allSpans.filter((el) => el.hasAttribute("data-text"));
}

function changeText(element, event) {
  // --- on text change (adding text, deleting text)
  console.log(event);
  switch (event.inputType) {
    case "insertText":
      {
        const cursorPos = textArea.selectionStart;

        let text = event.data;
        const span = document.createElement("span");

        console.log(text);

        if (text === " ") {
          span.setAttribute("data-text", "&nbsp;");
          span.innerText = "\u00a0";
        } else {
          if (text) {
            span.setAttribute("data-text", text);
            span.textContent = text;
          }
        }

        typeLine.appendChild(span);
        if (cursorPos !== element.value.length) {
          let e = new Event("pressingSideArrows");
          e.keyCode = 37;
          moveCursor(element.value, cursorPos, e);
        }
      }

      break;

    case "deleteContentBackward":
      {
        const cursorPos = textArea.selectionStart;

        console.log(cursorPos);
        getTextSpans()[cursorPos].remove();
      }
      break;
    case "deleteContentForward":
      {
        const cursorPos = textArea.selectionStart;
        getTextSpans()[cursorPos].remove();
      }
      break;
  }
  if (element.value === "") {
    typeLine.innerText = "";
  }
}

function executeCommand(commandText) {
  textArea.value = "";
  typeLine.innerText = "";
  cursor.setAttribute("class", "cmd-cursor");
  let userCommand = commandText.split(" ").filter((el) => el !== "");
  console.log(userCommand);
  const commandObj = commands.find((el) => el.command === userCommand[0]);
  if (!commandObj) {
    addUserCommandLine(userCommand[0]);
    addTextToShowLine(`${errorPrefix} Command "${userCommand[0]}" not found!`, {
      color: "red",
    });
    return;
  }
  const arg = userCommand[1] || null;
  if (commandObj.hasArg) {
    if (!arg) {
      addUserCommandLine(`${commandObj.command}`);
      //Has arg?
      addTextToShowLine(
        `${errorPrefix} Wrong number of arguments. Command "${commandObj.command}" expects 1, got 0`,
        { color: "red" }
      );
      return;
    }
    switch (
      commandObj.command //-- check if command has arg. If not - show error
    ) {
      case "homework":
        {
          if (!homeworksArr.includes(arg)) {
            addUserCommandLine(`${commandObj.command} ${arg}`);
            addTextToShowLine(
              `${errorPrefix} Homework "${arg}" not found! Type "homeworks" to see a list`,
              { color: "red" }
            );
            return;
          }
        }
        break;
      case "task":
        {
          if (!tasksArr.includes(arg)) {
            addUserCommandLine(`${commandObj.command} ${arg}`);
            addTextToShowLine(
              `${errorPrefix} Task "${arg}" not found! Type "tasks" to see a list`,
              { color: "red" }
            );
            return;
          }
        }
        break;
    }
  }
  commandObj.func.call(this, userCommand.join(" "), arg); //--- calling command function
}

function addTextToShowLine(textToShow, styleObj) {
  //add result text line
  const p = document.createElement("p");

  p.innerText = textToShow;
  for (const fieldName in styleObj) {
    if (Object.hasOwnProperty.call(styleObj, fieldName)) {
      p.style.setProperty(fieldName, styleObj[fieldName]);
    }
  }
  resultLines.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}
function addUserCommandLine(userCommand) {
  // add user's command text line
  console.log(userCommand);
  const p = document.createElement("p");
  p.innerText = `root:~$ ${userCommand}`;
  resultLines.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}

function moveCursor(charactersNumber, cursorPos, event) {
  console.log(event);
  switch (event.keyCode) {
    case 37:
    case 39:
      {
        let textSpans = getTextSpans();
        typeLine.innerText = "";
        cursor.removeAttribute("class");

        if (cursorPos === charactersNumber) {
          //Is cursor in the end?
          for (let i = 0; i < textSpans.length; i++) {
            typeLine.appendChild(textSpans[i]);
          }
          cursor.setAttribute("class", "cmd-cursor");
          return;
        }

        //---------------------------------------------------------------------------

        const cursorSpan =
          textSpans[cursorPos] || document.createElement("span");
        const cursorSpanCategory = document.createElement("span");
        cursorSpanCategory.setAttribute("class", "cmd-cursor");
        cursorSpanCategory.appendChild(cursorSpan);

        //----------------------------------------------------------------

        const previousTextSpanCategory = document.createElement("span");

        for (let i = 0; i < cursorPos; i++) {
          previousTextSpanCategory.appendChild(textSpans[i]);
        }
        console.log(previousTextSpanCategory);

        //---------------------------------------------------------------

        const followingTextSpanCategory = document.createElement("span");

        for (let i = cursorPos + 1; i < charactersNumber; i++) {
          followingTextSpanCategory.appendChild(textSpans[i]);
        }

        console.log(followingTextSpanCategory);

        typeLine.append(
          previousTextSpanCategory,
          cursorSpanCategory,
          followingTextSpanCategory
        );
      }
      break;
  }
}
