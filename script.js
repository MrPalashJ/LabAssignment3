const billTotal = document.getElementById("billTotal");
const tipSlider = document.getElementById("tipSlider");
const tipPercentage = document.getElementById("tipPercentage");
const tipAmount = document.getElementById("tipAmount");
const totalBill = document.getElementById("totalBill");
const errorMessage = document.getElementById("error-message");
const split = document.getElementById("split");
const amountPerPerson = document.getElementById("amountPerPerson"); 
const resetButton = document.getElementById("resetButton");

billTotal.addEventListener("input", calculateTip);
tipSlider.addEventListener("input", calculateTip);
split.addEventListener("input", calculateTip);
resetButton.addEventListener("click", resetForm);

function calculateTip() {
    const bill = parseFloat(billTotal.value);
    const tip = parseFloat(tipSlider.value);
    const numPeople = parseInt(split.value);

    if (!isNaN(bill) && numPeople >= 1) {
        const tipValue = (bill * tip) / 100;
        const total = bill + tipValue;
        const perPerson = total / numPeople;
        tipPercentage.value = tip + "%";
        tipAmount.value = tipValue.toFixed(2);
        totalBill.value = total.toFixed(2);
        amountPerPerson.value = perPerson.toFixed(2);
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Please enter a valid number for Bill Total and ensure there is at least 1 person.";
    }
}

function resetForm() {
    billTotal.value = "";
    tipSlider.value = 0;
    tipPercentage.value = "";
    tipAmount.value = "";
    totalBill.value = "";
    errorMessage.textContent = "";
    split.value = 1;
    amountPerPerson.value = "";
}

function openBox(type) {
    let splitElement = document.getElementById("splitB")
    switch (type) {
        case 'y':
            splitElement.style.display = "block"
            break;
        case 'n':
            splitElement.style.display = "none"
            split.value = 1;
            this.calculateTip();
            break;
        default:
            break;
    }
}