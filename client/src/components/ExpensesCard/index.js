import React, {useState} from "react";
import DatePicker from "react-datepicker";
import API from "../../utils/API";
import { faTrash, 
         faCheck 
        } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const expensesCard = (
    {
        deleteHandler ,
        item
    }
) => {
    // here i am using separate state in order to edit each input
    const [editItemName, setEditItemName] = useState(false);
    const [editAmount, setEditAmount] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [editCategory, setEditCategory] = useState(false);

    const expensesObj = {

        itemName: item.itemName,
        amount: item.amount,
        note : item.note,
        category : item.category,
        _id: item._id,
  
    }
    // here am making one state to use in handle change for edit part
    const [editInput, setEditInput] = useState(expensesObj);
    
    // function for handling input change 
  const handleEditChange = event => {
    const { name, value } = event.target;
    setEditInput({
      ...editInput,
      [name]: value
    });
    console.log(editInput)
  };

  const Update = (e) => {
    if(e.keyCode === 13) {
      setEditItemName(false)
      setEditAmount(false)
      setEditCategory(false)
      setEditNote(false)
      API.UpdateExpenses(editInput._id, editInput)
    } 
 
    console.log("right now you are inside of update part")
  }
    return (
    <li className=" ToDoList__item" >
        <div className=" ToDoList__data">

            {editItemName ?
            <div className=" ToDoList__input-edit"> 
            <input
            name= "ItemName"
            id={editInput._id}
            value = {editInput.name} 
            onKeyUp={Update}
            onChange={handleEditChange}
            type="text"
            className="form-control input-dolist"
            placeholder="Item name"
            />
            </div> :
            <h2 onClick={() => setEditItemName(true)}
            >  {editInput.itemName}
            </h2>
            }

            {editNote ?
            <div className=" ToDoList__input-edit">
            <input
            name= "note"
            id={editInput._id}
            value = {editInput.name}
            onChange={handleEditChange}
            onKeyUp={Update}
            type="text"
            className="form-control input-dolist"
            placeholder="Note"
            />
            </div> :
            <h2 onClick={() => setEditNote(true)}
            >  {editInput.note}
            </h2>
            }

          {editAmount ?
            <div className=" ToDoList__input-edit">
            <input
            name= "amount"
            id={editInput._id}
            value = {editInput.name}
            onChange={handleEditChange}
            onKeyUp={Update}
            type="text"
            className="form-control input-dolist"
            placeholder="Amount"
            />
            </div> :
            <h2 onClick={() => setEditAmount(true)}
            >  {editInput.amount}
            </h2>
            }

          {editCategory ?
            <div className=" ToDoList__input-edit">
            <input
            name= "category"
            id={editInput._id}
            value = {editInput.name}
            onChange={handleEditChange}
            onKeyUp={Update}
            type="text"
            className="form-control input-dolist"
            placeholder="Category"
            />
            </div> :
            <h2 onClick={() => setEditCategory(true)}
            >  {editInput.category}
            </h2>
            }

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

            
    )
}
export default expensesCard;