import React from "react";


const displayExpenses = ({

    expenses
}

) => {

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
            </li>
                ))}
        </ul>
    //<button type="button" className="btn btn--toDoList-icon "
//     data-unique-id={item._id}
//     onClick={deleteHandler}>
//     <FontAwesomeIcon icon={faTrash} /> 
//     </button> 

//     <button type="button" className="btn btn--toDoList-icon "
//     data-unique-id={item._id}
//     onClick={deleteHandler}> 
//     <FontAwesomeIcon icon={faCheck} /> 
//     </button> 


    )
}



export default displayExpenses;
