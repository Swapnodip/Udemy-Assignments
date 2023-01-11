import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [year,setYear] = useState("2020")
  const data = props.items.filter(e=>(e.date.getFullYear()==year))

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} setYear={setYear}/>
      {data.map((e) => (
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={e.id} />
      ))}
    </Card>
  );
}

export default Expenses;
