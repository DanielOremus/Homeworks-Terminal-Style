const asciiTitle = "TASK 2";

function isEnoughMoney(price, money) {
  return money >= price;
}
function getRemainingMoney(price, money) {
  return money - price;
}

function showResult() {
  const inputList = document.querySelectorAll("input");
  const productPrice = parseFloat(inputList[0].value || 0);
  const userMoney = parseFloat(inputList[1].value || 0);
  const lotteryPrice = 4;
  if (isEnoughMoney(productPrice, userMoney)) {
    if (getRemainingMoney(productPrice, userMoney) >= lotteryPrice)
      alert(
        `Дякуємо за покупку! Не бажаєте купити лотерею за ${lotteryPrice} грн?`
      );
    else alert("Дякуємо за покупку!");
  } else alert("У вас недостатньо грошей");
}

function fontLoaded() {
  document.getElementById("task").innerText = render4HTML(asciiTitle);
}
