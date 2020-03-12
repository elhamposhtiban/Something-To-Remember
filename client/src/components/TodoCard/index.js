
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ToDolistCard = (
    {
        handleInputChange ,
        doListInput ,
        doList,
        handleDateChange ,
        deleteHandler ,
        updateHandler,
        item
    }
) => {

    // here i am using separate state in order to edit each input
    const [editTitle, setEditTitle] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [editDate, setEditDate] = useState(false);

    return (

    <li className=" ToDoList__item" key={item._id}>
        <div className=" ToDoList__data">
            {editTitle ?
            <div className=" ToDoList__input-edit"> 

            <input
            name= "title"
            id={item._id}
            value = {doListInput.name}
            onChange={handleInputChange}
            type="text"
            className="form-control input-dolist"
            placeholder="title"
            />
            <button type="button" className="btn btn--toDoList-icon"
            data-unique-id={item._id}
            onClick={updateHandler}> 
            <FontAwesomeIcon icon={faEdit} /> 
            </button> 
            </div> :

            <h2 onClick={() => setEditTitle(true)}
            >  {item.title}
            </h2>

            }

            {editNote ?
            <div className=" ToDoList__input-edit">

            <input
            name= "description"
            id={item._id}
            value = {doListInput.name}
            onChange={handleInputChange}
            type="text"
            className="form-control input-dolist"
            placeholder="description"
            />

            <button type="button" className="btn btn--toDoList-icon"
            data-unique-id={item._id}
            onClick={updateHandler}> 
            <FontAwesomeIcon icon={faEdit} /> 
            </button> 
            </div> :

            <h2 onClick={() => setEditNote(true)}
            >  {item.description}
            </h2>

            }

            {editDate ?
            <div className=" ToDoList__input-edit">

            <DatePicker
            selected={doListInput.date}
            id={item._id}
            onChange={date => handleDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            />

            <button type="button" className="btn btn--toDoList-icon"
            data-unique-id={item._id}
            onClick={updateHandler}> 
            <FontAwesomeIcon icon={faEdit} /> 
            </button> 

            </div>:

            <h4 onClick={() => setEditDate(true)}
            >  {item.date}
            </h4>
            
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

export default ToDolistCard;
