import React from "react";
import Proptype from "prop-types";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';
import API from "../utils/API";


const proptype = {
    dolist : Proptype.array.isRequired,
    loadDolist: Proptype.func.isRequired

}





const DolistResult = ({doList,loadDolist }) => {

    //function for handling delete 
    const deleteHandler = event => {
        event.preventDefault();
        const deleteId = event.target.getAttribute("data-unique-id");
        console.log(deleteId)
        deleteDolist(deleteId)
    }
  
    
    const deleteDolist = async (deleteId) => {
      try {
        await API.deleteDolist(deleteId);
        loadDolist();
      } catch(error) {
        console.group("DELETE A BOOK is not happening");
        console.log(error);
        console.groupEnd();
      }
    };


        //function for handling update
        const updateHandler = event => {
            event.preventDefault();
            const updateId = event.target.getAttribute("data-unique-id");
            console.log(updateId)
            updateDolist(updateId)
        }

        const updateDolist = async (updateId) => {
            try {
              await API.UpdateDolist(updateId);
              loadDolist();
            } catch(error) {
              console.group("hey i can not update to do list for you");
              console.log(error);
              console.groupEnd();
            }
          };
    
    return (
        <FlipMove>
        <div className="card p-3 ToDoList-card">
            <div className="card-title"><h5>Here is your to do list </h5></div>
            <div className="card-body">
           
                <ul className="list-group">
                    {doList.map(item => (
                    <li className="list-group-item" key={item._id}>

                        <h2>{item.title}</h2>

                        <h4>{item.description}</h4>

                        <p className="img-fluid">{item.date}</p>

                        <button type="button" 
                        className="btn btn-warning" 
                        data-toggle="modal"
                        data-target="#dolistModal"
                        data-unique-id={item._id}
                        onClick = {updateHandler}
                        ><FontAwesomeIcon icon={faEdit} />
                        </button>

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
                    ))}
                </ul>
                
            </div>
                         {/* Modal  */}
            <div className="modal fade" id="dolistModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">update todolist</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>


                    <div className="modal-body">
                    
                        {/* <form>
                            <div className="form-group form-dolist">

                                <label className ="Dolist-label" htmlFor="dolist">title</label>
                                <input
                                id="dolist"
                                name= "title"
                                value = {doListInput.name}
                                onChange={handleInputChange}
                                type="text"
                                className="form-control input-dolist"
                                placeholder="title"
                                />

                                <DatePicker
                                selected={doListInput.date}
                                onChange={date => handleDateChange(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                />

                                <label className ="Dolist-label" htmlFor="description">description</label>
                                <textarea 
                                className="form-control input-dolist"
                                name="description"
                                value= {doListInput.name}
                                id="description"
                                placeholder="description"
                                onChange={handleInputChange} 
                                />
                                
                                <button 
                                disabled={!(doListInput.title && doListInput.description)}
                                onClick= {handleFormSubmit}
                                className="btn btn-success toDolist-btn">
                                submit check list
                                </button>
                        
                            </div>
                        </form> */}
                    </div>


                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </FlipMove>
    )
}

DolistResult.prototype = proptype
export default DolistResult;