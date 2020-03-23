import React from "react";
import API from "../../utils/API";
import { 
    faTrash, 
    faCheck 
   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const displayExpenses = ({

    expenses,
    loadExpenses
}

) => {

        //function for handling delete 
        const deleteHandler = event => {
            event.preventDefault();
    
            const deleteId = event.target.getAttribute("data-unique-id");
            console.log(deleteId)
    
            deleteExpenses(deleteId)
        }
      
        //function for  delete to expenses
        const deleteExpenses = async (deleteId) => {
          try {
            await API.deleteExpenses(deleteId);
            loadExpenses();
    
          } catch(error) {
            console.group("DELETE A BOOK is not happening");
            console.log(error);
            console.groupEnd();
          }
        };

    console.log("this is an expenses", expenses)

    return (
        

        <ul className="list-group">

        { expenses?.length && expenses.map(item => ( 


        <li className=" ToDoList__item" key={item._id} >

        <div className=" ToDoList__data">
 

               <h1>{item.budget}</h1>
                <h2>
                    {item.itemName}
                </h2>
                <h2> 
                    {item.amount}
                </h2>


                <h4>
                    {item.category}

                </h4>

                <h4>
                    {item.note}
                </h4>
                    
            </div>
            <button type="button" className="btn btn--toDoList-icon "
            data-unique-id={item._id}
            onClick={deleteHandler}>
            <FontAwesomeIcon icon={faTrash} /> 
            </button> 

            <button type="button" className="btn btn--toDoList-icon "
            data-unique-id={item._id}
            onClick={deleteHandler}> 
            <FontAwesomeIcon icon={faCheck} /> 
            </button> 
            </li>
                ))}


        </ul>



    )
}



export default displayExpenses;