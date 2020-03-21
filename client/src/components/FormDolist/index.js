import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { faStickyNote,
          faTasks,
        } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const FormDolist = (
  { doListInput,
    handleInputChange,
    handleFormSubmit,
    handleDateChange}
) => {

    return( 
      

      <div className="ToDoList">

          <div className="ToDoList__form">

            <form className = " form-toDoList">

                <div className="form-toDoList__group input-group">

                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faTasks} />
                      </span>
                    </div>

                    <input
                      id="dolist"
                      name= "title"
                      value = {doListInput.name}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control form-toDoList__input"
                      placeholder="title"
                    />
                    {/* <label className ="Dolist-label" htmlFor="dolist">title</label> */}

                </div>

                <div className="form-toDoList__group input-group">

                  <DatePicker
                    selected={doListInput.dueDate}
                    onChange={date => handleDateChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="form-control form-toDoList__input"
                  />
                </div>

                <div className="form-toDoList__group input-group">

                  <div className="input-group-prepend">
                    <span className="input-group-text">
                    <FontAwesomeIcon className="form__icon fa-2x" icon={faStickyNote} />
                    </span>
                  </div>

                  <textarea 
                    className="form-control form-toDoList__input"
                    name="description"
                    value= {doListInput.name}
                    id="description"
                    placeholder="description"
                    onChange={handleInputChange} 
                  />

                    {/* <label className ="Dolist-label" htmlFor="description">description</label> */}

                </div>
                  
                <button 
                  disabled={!(doListInput.title && doListInput.description)}
                  onClick= {handleFormSubmit}
                  className="btn btn btn--pink-toDoList">
                    CREATE
                </button>
            
          </form>
        </div>
    </div>

    )
}

export default FormDolist;

