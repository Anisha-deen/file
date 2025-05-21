// Get DOM elements
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalAmountElement = document.getElementById('total-amount');

// Array to store expenses
let expenses = [];

// Function to add expense
function addExpense() {
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value.trim());

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount');
        return;
    }

    // Create expense object
    const expense = {
        name: expenseName,
        amount: expenseAmount
    };

    // Add expense to the expenses array
    expenses.push(expense);

    // Clear the input fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';

    // Update the UI
    displayExpenses();
    updateTotalAmount();
}

// Function to display expenses
function displayExpenses() {
    // Clear the current list
    expenseList.innerHTML = '';

    // Loop through the expenses and display them
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.name} - $${expense.amount.toFixed(2)} 
            <button class="delete-expense" onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(li);
    });
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
    updateTotalAmount();
}

// Function to update total amount
function updateTotalAmount() {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Event listener for add expense button
addExpenseButton.addEventListener('click', addExpense);
