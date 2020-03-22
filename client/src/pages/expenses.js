import React, {useState, useEffect} from "react";
import Expensesform from "../components/Expensesform/index";
import ExpensesResult from "../components/ExpensesResult/index";
import API from "../utils/API"
import {useSelector} from "react-redux"


const Expenses = () => {


  const result = useSelector (state => state.auth.user.id)
  console.log( "this is result", result)

  const [showBudget, setShowBudget] = useState({})

  const [expenses, setExpenses] = useState([]);

  const [budgetInput, setBudgetInput] = useState("");
  
  const [expensesInput, setExpensesInput] = useState({

    itemName: "",
    amount: Number,
    category: "",
    note: ""

      })

  const userId =result


  console.log("this is userid", userId)

  useEffect(() => {
    const displayB = async function() {
      const showBudgets = await displayBudget();
      setShowBudget(showBudgets);
    }
    displayB();
  }, []);
  

  const displayBudget = async () => {
    try {
      const response = await API.getAllByUserIdExpenses(userId);
      console.log('you should show me user links', response.data)
      return response.data[0] 

    } catch (error) {
      console.group("it can not load wedding profile");
      console.log(error);
      console.groupEnd();
    }

  };




// useEffect ( () => {
//     loadBudget ();
// }, []);


useEffect ( () => {
    loadExpenses ();
}, []);



// const loadBudget = async () => {
//     try {
//       const response = await API.getAllExpenses();
//       setExpenses(response.data);
//       console.log('expenses is hereee', response.data)
//     } catch (error) {
//       console.group("it can not load todo list");
//       console.log(error);
//       console.groupEnd();
//     }
//   };


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

  //function for handling input change for budget 
  // const handleInputChangeBudget = event => {
  //   setBudgetInput(event.target.value);
  //   console.log(budgetInput)

  // };

  // function for handling input change for form
  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpensesInput({
      ...expensesInput,
      [name]: value
      
    });
    console.log(expensesInput)
  };

  const handleBudgetSubmit = async event => {
    console.log("hi i am actually getting the data")
    event.preventDefault();
     {
      try {
        await API.saveExpenses({
          budgetInput,
        });
        setBudgetInput("")
    
        let budget = budgetInput.reduce((total, value) => {
          return total.amount - value.amount;
        });
        console.log(budget)
        setBudgetInput(budget);
        console.log("i am budget")
      } catch (error) {
        console.group("i am not working BUDGET");
        console.log(error);
        console.groupEnd();
      }
    }
  };

  const handleExpensesSubmit = async event => {
    console.log("hi i am actually getting the data")
    event.preventDefault();
     {
      try {
        await API.saveExpenses({
          ...expensesInput,
          user_id: result
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


  // console.log("hey i am getiing this from wedding profile" ,showBudget.totalBudget)

    return (
      <React.Fragment>

        <section className="section-budget">
        <Expensesform
        // handleInputChangeBudget= {handleInputChangeBudget}
        handleInputChange = {handleInputChange}
        // handleBudgetSubmit = {handleBudgetSubmit}
        handleExpensesSubmit = {handleExpensesSubmit}
        expensesInput = {expensesInput}
        budgetInput = {budgetInput}
        expenses = {expenses}
        />

{showBudget?

          <div>  hiiii {showBudget.totalBudget} </div> : null
        }

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