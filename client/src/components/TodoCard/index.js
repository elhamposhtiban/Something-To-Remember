
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

    <li className="list-group-item" key={item._id}>

        {editTitle ?
        <div>

        <input
        name= "title"
        id={item._id}
        value = {doListInput.name}
        onChange={handleInputChange}
        type="text"
        className="form-control input-dolist"
        placeholder="title"
        />
        <button type="button" className="btn btn-success mr-4 float-right"
        data-unique-id={item._id}
        onClick={updateHandler}> 
        submit the changes
        </button> 
        </div> :

        <h2 onClick={() => setEditTitle(true)}
        >  {item.title}
        </h2>

        }

        {editNote ?
        <div>

        <input
        name= "description"
        id={item._id}
        value = {doListInput.name}
        onChange={handleInputChange}
        type="text"
        className="form-control input-dolist"
        placeholder="description"
        />

        <button type="button" className="btn btn-success mr-4 float-right"
        data-unique-id={item._id}
        onClick={updateHandler}> 
       submit the changes
        </button> 
        </div> :

        <h4 onClick={() => setEditNote(true)}
        >  {item.description}
        </h4>

        }

        {editDate ?
        <div>

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
        <button type="button" className="btn btn-success mr-4 float-right"
        data-unique-id={item._id}
        onClick={updateHandler}> 
        submit the changes
        </button> 
        </div>:

        <h4 onClick={() => setEditDate(true)}
        >  {item.date}
        </h4>
        
        }


    <button type="button" className="btn btn-danger mt-3 float-right"
    data-unique-id={item._id}
    onClick={deleteHandler}>
    <FontAwesomeIcon icon={faTrash} /> 
    </button> 

    <button type="button" className="btn btn-success mr-4 mt-3 float-right"
    data-unique-id={item._id}
    onClick={deleteHandler}> 
    <FontAwesomeIcon icon={faCheck} /> 
    </button> 

</li>
            

    )
}

export default ToDolistCard;
