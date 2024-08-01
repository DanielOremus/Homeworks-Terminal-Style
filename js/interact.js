let selectedIndex = -1;
const interactiveItems = document.getElementsByClassName("interactive");
for (const element of interactiveItems) {
  element.setAttribute("readonly", true);
}
addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 13) {
    event.preventDefault();
    if (selectedIndex !== -1) {
      if (interactiveItems[selectedIndex].tagName === "BUTTON") {
        interactiveItems[selectedIndex].click();
      } else {
        if (interactiveItems[selectedIndex] === document.activeElement) {
          interactiveItems[selectedIndex].blur();
        } else {
          interactiveItems[selectedIndex].focus();
          interactiveItems[selectedIndex].removeAttribute("readonly");
        }
      }
    }
  } else {
    if (key === 38 || key === 37) {
      event.preventDefault();

      if (selectedIndex === -1) {
        selectedIndex = 0;
      } else {
        if (selectedIndex !== 0) {
          interactiveItems[selectedIndex].classList.remove("active");
          interactiveItems[selectedIndex].blur();
          interactiveItems[selectedIndex].setAttribute("readonly", true);

          selectedIndex--;
        }
      }
      interactiveItems[selectedIndex].classList.add("active");
    } else if (key === 40 || key === 39) {
      event.preventDefault();
      if (selectedIndex === -1) {
        selectedIndex = 0;
      } else {
        if (selectedIndex !== interactiveItems.length - 1) {
          interactiveItems[selectedIndex].classList.remove("active");
          interactiveItems[selectedIndex].blur();
          interactiveItems[selectedIndex].setAttribute("readonly", true);
          selectedIndex++;
        }
      }
      interactiveItems[selectedIndex].classList.add("active");
    }
  }
});
