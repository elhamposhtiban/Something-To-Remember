import React, {useState, useEffect} from "react";
import Expensesform from "../components/Expensesform"


const Expenses = () => {


const [expenses, setExpenses] = useState([]);
const [budgetInput, setBudgetInput] = useState("");
const [expensesInput, setExpensesInput] = useState({

    itemName: "",
    amount: "",
    category: "",
    note: ""

})


useEffect ( () => {
    loadBudget ();
}, []);

useEffect ( () => {
    loadExpense ();
}, []);

const loadBudget = async () => {
    try {
      const response = await API.getAllDolist();
      setExpenses(response.data);
      console.log('todos', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };


  const loadExpense = async () => {
    try {
      const response = await API.getAllDolist();
      setExpenses(response.data);
      console.log('todos', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };




    return (
        <Expensesform/>
    )
}

export default Expenses;