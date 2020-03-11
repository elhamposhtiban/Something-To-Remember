
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
        showEditHandler ,
        deleteHandler ,
        updateHandler,
        item
    }
) => {


    return (


                <li className="list-group-item" key={item._id}>


                    <h2>{item.title}</h2>

                    <h4>{item.description}</h4>

                    <p className="img-fluid">{item.date}</p>

                        <button type="button" 
                        className="btn btn-warning" 
                        data-unique-id={item._id}
                        onClick = {showEditHandler}
                        >
                        <FontAwesomeIcon icon={faEdit} />
                        </button>

                        {showEdit &&  
                        <form>
                            <input
                                id="dolist"
                                name= "title"
                                type="text"
                                onChange={handleInputChange}
                                value= {doListInput.name}
                                className="form-control input-dolist"
                                placeholder="title"/>

                                <DatePicker
                                selected={doListInput.date}
                                onChange={date => handleDateChange(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />

                            <textarea 
                            className="form-control input-dolist"
                            name="description"
                            value= {doListInput.name}
                            id="description"
                            placeholder="description"
                            onChange={handleInputChange} 
                            />
                            <button type="button" className="btn btn-success mt-3"
                            data-unique-id={item._id}
                            onClick={updateHandler}>
                            SUBMIT
                            </button>
                            </form>
                        }

                    <button type="button" className="btn btn-danger float-right"
                    data-unique-id={item._id}
                     onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} /> 
                    </button> 

                    <button type="button" className="btn btn-success mr-4 float-right"
                    data-unique-id={item._id}
                    onClick={deleteHandler}> 
                    <FontAwesomeIcon icon={faCheck} /> 
                    </button> 
               
                </li>
                

            

    )
}

export default ToDolistCard;
