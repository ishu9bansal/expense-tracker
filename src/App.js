import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { useSelector } from 'react-redux';

function App() {
  const [editId, setEditId] = useState(-1);

  const globalState = useSelector(state => state);
  console.log("State updated: ");
  console.log(globalState);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage editId={editId} setEditId={setEditId} />}></Route>
          <Route path='expenses' element={<ExpenseListPage setEditId={setEditId} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
