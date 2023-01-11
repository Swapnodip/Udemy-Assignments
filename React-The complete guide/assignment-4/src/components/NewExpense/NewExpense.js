import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [activate, setActivate] = useState(false);

  if (activate) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          close={() => {
            setActivate(false);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={()=>{setActivate(true)}}>Add new expense</button>
      </div>
    );
  }
};

export default NewExpense;
