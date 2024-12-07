import React, { useState } from 'react';
import { DateInput, AmountInput, TitleInput, CategoryInput, PaymentModeInput, RecurringInput, BeneficiaryInput, TagsInput } from './Inputs';

const emptyForm = () => ({
  date: new Date().toISOString().split('T')[0],
  amount: '',
  title: '',
  category: '',
  newCategory: '',
  paymentMode: 'Cash',
  recurring: false,
  beneficiary: 'Self',
  tags: '',
});

function formValuesFromLocalStorage(id, expenses) {
  const expense = expenses.find(expense => expense.id === id);
  const formValues = {
    ...expense,
    newCategory: '',  // TODO: fix later
    tags: expense.tags?.join ? expense.tags.join(',') : expense.tags,
  };
  return formValues;
}

const ExpenseForm = ({ onSaveExpense, editId, expenses }) => {
  const prefilledForm = editId > -1 ? formValuesFromLocalStorage(editId, expenses) : emptyForm();
  const [formValues, setFormValues] = useState(prefilledForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      ...formValues,
      amount: +formValues.amount,
      category: formValues.category || formValues.newCategory,
      newCategory: undefined,
      tags: formValues.tags?.split(','),
    };
    onSaveExpense(expense, editId);
    setFormValues(emptyForm());
  };

  const [date, setDate] = [formValues.date, (val) => setFormValues((state) => ({...state, date: val}))]
  const [amount, setAmount] = [formValues.amount, (val) => setFormValues((state) => ({...state, amount: val}))]
  const [title, setTitle] = [formValues.title, (val) => setFormValues((state) => ({...state, title: val}))]
  const [category, setCategory] = [formValues.category, (val) => setFormValues((state) => ({...state, category: val}))]
  const [newCategory, setNewCategory] = [formValues.newCategory, (val) => setFormValues((state) => ({...state, newCategory: val}))]
  const [paymentMode, setPaymentMode] = [formValues.paymentMode, (val) => setFormValues((state) => ({...state, paymentMode: val}))]
  const [recurring, setRecurring] = [formValues.recurring, (val) => setFormValues((state) => ({...state, recurring: val}))]
  const [beneficiary, setBeneficiary] = [formValues.beneficiary, (val) => setFormValues((state) => ({...state, beneficiary: val}))]
  const [tags, setTags] = [formValues.tags, (val) => setFormValues((state) => ({...state, tags: val}))]

  const submitButtonText = editId > -1 ? "Edit Expense" : "Add Expense";

  return (
    <form onSubmit={handleSubmit}>
      <DateInput value={date} onChange={setDate} />
      <AmountInput value={amount} onChange={setAmount} />
      <TitleInput value={title} onChange={setTitle} />
      <CategoryInput selectedCategory={category} onChange={setCategory} newCategory={newCategory} onNewCategoryChange={setNewCategory} />
      <PaymentModeInput selectedMode={paymentMode} onChange={setPaymentMode} />
      <RecurringInput value={recurring} onChange={setRecurring} />
      <BeneficiaryInput selectedBeneficiary={beneficiary} onChange={setBeneficiary} />
      <TagsInput value={tags} onChange={setTags} />
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default ExpenseForm;