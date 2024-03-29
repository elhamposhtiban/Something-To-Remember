import React, {useState, useEffect} from "react";
import Expensesform from "../components/Expensesform/index";
import ExpensesResult from "../components/ExpensesResult/index";
import API from "../utils/API"
import {useSelector} from "react-redux"


const Expenses = () => {


  // this is for linking user-id to state 
  const result = useSelector (state => state.auth.user.id)
  console.log( "this is result", result)

  //this state is for showing budget that we grabbing from survey page
  const [showBudget, setShowBudget] = useState({})

  //this state is for storing data, and reading data
  const [expenses, setExpenses] = useState([]);
  
    // this state is for grabbing info from the form inputs 
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
      console.log("this is a showBudgets", showBudgets)
    }
    displayB();
  }, []);
  

  const displayBudget = async () => {
    try {
      const response = await API.getAllByUserIdWedding(userId);
      console.log('you should show me user links', response.data)
      return response.data[0] 

    } catch (error) {
      console.group("it can not load wedding profile");
      console.log(error);
      console.groupEnd();
    }

  };


useEffect ( () => {
    loadExpenses ();
}, []);


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



  // function for handling input change for form
  const handleInputChange = event => {
    const { name, value } = event.target;
    setExpensesInput({
      ...expensesInput,
      [name]: value
      
    });
    console.log(expensesInput)
  };


  const handleCurrentBudget = () => {

   const currentBudget =  showBudget.totalBudget - expensesInput.amount

   console.log("i am working")

   console.log("this is current BUdget", currentBudget)
   console.log("this is show budgett", showBudget.totalBudget)
   setShowBudget(prevState => ({ ...prevState, totalBudget: currentBudget }));

  }


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

        handleCurrentBudget()
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

        handleInputChange = {handleInputChange}
        handleExpensesSubmit = {handleExpensesSubmit}
        showBudget = {showBudget}
        expensesInput = {expensesInput}

        expenses = {expenses}
        />


    {expenses.length ?
        <ExpensesResult
         expenses = {expenses}
         loadExpenses = {loadExpenses}
        />
        :null}

        </section>

      </React.Fragment>
    )
}

export default Expenses;




