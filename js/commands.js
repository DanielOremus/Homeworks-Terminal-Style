const spacesCount = 15
const commands = [
  {
    title: "help",
    command: "help",
    desc: "see list of commands",
    hasArg: false,
    func: (command) => {
      addUserCommandLine(command)
      const longestCommandLength = commands.reduce(
        (accumulator, el) =>
          el.title.length > accumulator
            ? (accumulator = el.title.length)
            : accumulator,
        0
      )
      for (const obj of commands) {
        addTextToShowLine(
          `${obj.title}` +
            " ".repeat(longestCommandLength - obj.title.length + spacesCount) +
            `${obj.desc}`
        )
      }
    },
  },
  {
    title: "about",
    command: "about",
    desc: "creator's name",
    hasArg: false,
    func: (command) => {
      addUserCommandLine(command)
      addTextToShowLine("Made by Daniel Oremus")
    },
  },
  {
    title: "homeworks",
    command: "homeworks",
    desc: "see list of homeworks",
    hasArg: false,
    func: (command) => {
      addUserCommandLine(command)
      for (let i = 0; i < homeworksArr.length; i++) {
        addTextToShowLine(`- Homework ${homeworksArr[i]}`)
      }
    },
  },
  {
    title: "homework <number>",
    command: "homework",
    desc: "check homework",
    hasArg: true,
    func: (command, arg) => {
      addUserCommandLine(command)
      window.location.href = `./Homework ${arg}/index.html`
    },
  },
]
