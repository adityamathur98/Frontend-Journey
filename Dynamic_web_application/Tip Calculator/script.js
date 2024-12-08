let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");

function calculateTip() {
  let billAmountInputValue = billAmountEl.value;
  let percentageTipInputValue = percentageTipEl.value;
  if (billAmountInputValue === "") {
    errorMessageEl.textContent = "Please Enter Valid Input";
  } else if (percentageTipInputValue === "") {
    errorMessageEl.textContent = "Please Enter Valid Input";
  } else {
    errorMessageEl.textContent = "";
    let billAmount = parseInt(billAmountInputValue);
    let tipPercentage = parseInt(percentageTipInputValue);

    let calculatedTip = (tipPercentage / 100) * billAmount;
    let calculatedTotal = billAmount + calculatedTip;

    tipAmountEl.value = calculatedTip;
    totalAmountEl.value = calculatedTotal;
  }
}
