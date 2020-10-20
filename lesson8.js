let dollarsStr = prompt("Введите сумму в долларах:");
let dollars = +dollarsStr;
const rate = 76;
if (isNaN(dollars)) {
  alert("Введите пожалуйста число");
}
else {
  alert(`${dollars}долларов = ${dollars * rate} рублей`);
}