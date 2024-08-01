const font = "ANSI Shadow";

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], fontLoaded);

function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true,
  });
}

function render4HTML(text) {
  return figlet.textSync(text, {
    font: font,
    whitespaceBreak: true,
  });
}
