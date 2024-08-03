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
    title: "return",
    command: "return",
    desc: "go to previous page",
    hasArg: false,
    func: () => {
      window.location.href = `../index.html`
    },
  },
  {
    title: "tasks",
    command: "tasks",
    desc: "see list of tasks",
    hasArg: false,
    func: (command) => {
      addUserCommandLine(command)
      for (let i = 0; i < tasksArr.length; i++) {
        addTextToShowLine(`- Task ${tasksArr[i]}`)
      }
    },
  },
  {
    title: "task <number>",
    command: "task",
    desc: "check task",
    hasArg: true,
    func: (command, arg) => {
      window.location.href = `./task${arg}/index.html`
    },
  },
]
