
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../utils/API";



const ToDolistCard = (
    {
        handleInputChange ,
        doListInput ,
        doList,
        handleDateChange ,
        deleteHandler ,
        
        item
    }
) => {

    // here i am using separate state in order to edit each input
    const [editTitle, setEditTitle] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [editDate, setEditDate] = useState(false);
    const time = new Date()
    const todo = {
        title: item.title,
        date: time.toDateString(),
        _id: item._id,
        description: item.description
    }



    // const [editList, setEditList] = useState([]);


    // here am making one state to use in handle change for edit part
    const [editInput, setEditInput] = useState(todo);

    // function for handling input change 
  const handleEditChange = event => {
    const { name, value } = event.target;
    setEditInput({
      ...editInput,
      [name]: value
    });
    console.log(editInput)

  };

  const handleEditDateChange= date => {
    setEditInput({
        ...editInput,
     date : date
    });
    console.log(editInput)

  };

    return (

    <li className=" ToDoList__item" >
        <div className=" ToDoList__data">

            {editTitle ?
            <div className=" ToDoList__input-edit"> 

            <input
            name= "title"
            id={editInput._id}
            value = {editInput.name}
            onKeyUp={(e) => {if(e.keyCode === 13) setEditTitle(false)}}
            onChange={handleEditChange}
            type="text"
            className="form-control input-dolist"
            placeholder="title"
            />
            </div> :

            <h2 onClick={() => setEditTitle(true)}
            >  {editInput.title}
            </h2>

            }

            {editNote ?
            <div className=" ToDoList__input-edit">

            <input
            name= "description"
            id={editInput._id}
            value = {editInput.name}
            onChange={handleEditChange}
            onKeyUp={(e) => {if(e.keyCode === 13) setEditDate(false)}}
            type="text"
            className="form-control input-dolist"
            placeholder="description"
            />
            </div> :

            <h2 onClick={() => setEditNote(true)}
            >  {editInput.description}
            </h2>

            }

            {editDate ?
            <div className=" ToDoList__input-edit">

            <DatePicker
            selected={editInput.date}
            id={editInput._id}
            onKeyUp={(e) => {if(e.keyCode === 13) setEditTitle(false)}}
            onChange={date => handleEditDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            />

            </div>:

            <h4 onClick={() => setEditDate(true)}
            >  {editInput.date}
            </h4>
            
            }

        </div>

    <button type="button" className="btn btn--toDoList-icon"
        data-unique-id={editInput._id}
        onClick={() => {API.UpdateDolist(editInput._id, editInput)}}> 
        <FontAwesomeIcon icon={faEdit} /> 
    </button> 

    <button type="button" className="btn btn--toDoList-icon "
    data-unique-id={editInput._id}
    onClick={deleteHandler}>
    <FontAwesomeIcon icon={faTrash} /> 
    </button> 

    <button type="button" className="btn btn--toDoList-icon "
    data-unique-id={editInput._id}
    onClick={deleteHandler}> 
    <FontAwesomeIcon icon={faCheck} /> 
    </button> 

</li>
            

    )
}

export default ToDolistCard;
