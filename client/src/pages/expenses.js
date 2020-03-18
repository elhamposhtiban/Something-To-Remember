import React, {useState, useEffect} from "react";
import Expensesform from "../components/Expensesform/index";
import ExpensesResult from "../components/ExpensesResult/index";
import API from "../utils/API"


const Expenses = () => {

const [expenses, setExpenses] = useState([]);
const [budgetInput, setBudgetInput] = useState("");
const [expensesInput, setExpensesInput] = useState({

    itemName: "",
    amount: Number,
    category: "",
    note: ""

})

console.log(expensesInput)


useEffect ( () => {
    loadBudget ();
}, []);


useEffect ( () => {
    loadExpenses ();
}, []);



const loadBudget = async () => {
    try {
      const response = await API.getAllExpenses();
      setExpenses(response.data);
      console.log('expenses is hereee', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };


  const loadExpenses = async () => {
    try {
      const response = await API.getAllExpenses();
      setExpenses(response.data);
      console.log('expenses is hereee', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };

  // function for handling input change for budget 
  const handleInputChangeBudget = event => {
    setBudgetInput(event.target.value);
    console.log(budgetInput)

  };

  // function for handling input change for form
  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpensesInput({
      ...expensesInput,
      [name]: value
    });
    console.log(expensesInput)

  };

  const handleExpensesSubmit = async event => {
    console.log("hi i am actually getting the data")
    event.preventDefault();
     {
      try {
        await API.saveExpenses({
          ...expensesInput,
        });
        setExpensesInput({
          itemName: "",
          amount: Number,
          category: "",
          note: ""
      
        });
        loadExpenses();
        console.log("hi i am success!!")
      } catch (error) {
        console.group("SUBMIT FORM");
        console.log(error);
        console.groupEnd();
      }
    }
  };


    return (
      <React.Fragment>
        <section className="section-budget">
        <Expensesform
        handleInputChangeBudget= {handleInputChangeBudget}
        handleInputChange = {handleInputChange}
        handleExpensesSubmit = {handleExpensesSubmit}
        expensesInput = {expensesInput}
        budgetInput = {budgetInput}
        expenses = {expenses}
        />

{expenses.length ?
        <ExpensesResult
         expenses = {expenses}
        />
        :null}
        </section>
        </React.Fragment>
    )
}

export default Expenses;