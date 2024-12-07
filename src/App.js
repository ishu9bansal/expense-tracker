import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import {getExpensesFromBackend, setExpensesInBackend} from './service/localStorage'
import expenseReducer from './reducers/expenseReducer';


function App() {
  const [editId, setEditId] = useState(-1);
  const [expenses, dispatchExpenseAction] = useReducer(expenseReducer, null);
  useEffect(() => {
    getExpensesFromBackend().then(expensesVal => {
      dispatchExpenseAction({
        type: "FILL",
        payload: { expenses: expensesVal },
      });
    });
  }, []);

  useEffect(() => {
    if (expenses === null) {
      return; // data not loaded from the backend yet
    }
    setExpensesInBackend(expenses).then(() => console.log("Saved expenses successfully!"));
  }, [expenses]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage editId={editId} setEditId={setEditId} expenses={expenses} dispatchExpenseAction={dispatchExpenseAction} />}></Route>
          <Route path='expenses' element={<ExpenseListPage setEditId={setEditId} expenses={expenses} dispatchExpenseAction={dispatchExpenseAction} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
