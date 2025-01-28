const balanceSpan =  document.querySelector("#balance span");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const addButton = document.getElementById("add");

let balance = 0;

addButton.addEventListener("click", function(){
    const amount = Number(amountInput.value);

    if(!amount || amount <= 0) {
        alert("გთხოვთ სწორად შეიყვანეთ თანხა");
        return;
    }

    if (typeSelect.value === "income"){
        balance += amount;
    } else{
        balance -= amount;
    }

    balanceSpan.textContent = balance;

    amountInput.value = ""
});