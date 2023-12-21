let totalExpense = 0;

function addExpense() {
  const amountInput = document.getElementById('expenseAmount');
  const categoryInput = document.getElementById('expenseCategory');

  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;

  if (!isNaN(amount)) {
    totalExpense += amount;
    updateUI(amount, category);
  }

  amountInput.value = '';
  categoryInput.value = '';
}

function updateUI(amount, category) {
  const expenseList = document.getElementById('expenseList');
  const newExpense = document.createElement('div');
  newExpense.textContent = `${category}: $${amount}`;
  expenseList.appendChild(newExpense);

  const totalExpenseDiv = document.getElementById('totalExpense');
  totalExpenseDiv.textContent = `Total: $${totalExpense}`;
}
