// Elements
let nameInput = document.getElementById("expenseName")
let amountInput = document.getElementById("expenseAmount")
let categorySelect = document.getElementById("expenseCategory")
let addBtn = document.getElementById("addBtn")
let clearBtn= document.getElementById("clearBtn")
let expenseList = document.getElementById("expenselist")
let totalExpense= document.getElementById("totalExpense")
let itemsCount = document.getElementById("itemsCount")
let highestExpense = document.getElementById("highestExpense")
let errorDiv = document.getElementById("error")

let expenses = [];

// Add Expenses
function addExpense () {
    const nameInput = nameInput.value;
    const amountInput = amountInput.value;
    const categorySelect = categorySelect.value;

    errorDiv.textContent = "";
    if (name ==="" , isNaN(amount) , amount <= 0) {
        errorDiv.textContent = "enter the valid name and the amount > 0.";
        return;
    }
    const li = document.createElement("li");
    li.textContent = `${name}, ${amount}, ${category}`;

    const expense = {name, amount, category };
    expenses.push(expense);
}
    //Delete an expense
    const deleteBtn  = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        for (let i = 0; i < expenses.length; i++) {
            if(expenses[i]=== expense){
                expenses.appendChild[li]
                updateSummary()
            }
        }
    })

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
    nameInput.value = "";
    amountInput.value = "";
    categorySelect.value = "Food";

    updateSummary();

// Clear All
function clearAll() {
    expenses = [];
    expenseList.textContent = "";
    updateSummary();
}
addBtn.addEventListener("click",addExpense);
clearBtn.addEventListener("click",clearAll);

// Update summary
function updateSummary() {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  totalAmountEl.textContent = total.toFixed(2);
  numItemsEl.textContent = expenses.length;

  if (expenses.length === 0) {
    highestExpense.textContent = "-";
  } else {
    const highest = expenses.reduce(
      (max, e) => (e.amount > max.amount ? e : max),
      expenses[0],
    );
    highestExpense.textContent = `${highest.name} ($${highest.amount.toFixed(2)})`;
  }
}
