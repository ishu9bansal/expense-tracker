const EXPENSES_DATA_KEY = 'expenses';
const DELAY = 2000;
const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function getExpensesFromBackend() {
    const expensesDataString = localStorage.getItem(EXPENSES_DATA_KEY) || '[]';
    const expenses = JSON.parse(expensesDataString);
    await sleep(DELAY);
    return expenses;
}

export async function setExpensesInBackend(expenses) {
    await sleep(DELAY);
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSES_DATA_KEY, updatedExpensesString);
    return;
}
