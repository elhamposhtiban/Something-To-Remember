import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
          faFemale,
          faMale,
          faLocationArrow,
          faDollarSign,
         } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Survey = () => {
 
    const [weddingProfile, setWeddingProfile] = useState([]);
  const [surveyInput, setSurveyInput] = useState(
      {
        brideName: "",
        groomName: "",
        location: "",
        totalBudget: "",
        date: new Date(),

      }
  );


    return( 
      

      <div className="ToDoList">

          <div className="ToDoList__form">

            <form className = " form-toDoList">

                <div className="form-toDoList__group input-group">

                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faFemale} />
                      </span>
                    </div>

                  <input
                    id="bride"
                    name= "bride"
                    // value = {}
                    // onChange={}
                    type="text"
                    className="form-control form-toDoList__input"
                    placeholder="Bride Name"
                  />
                  <label className ="Dolist-label" htmlFor="bride"> Bride Name</label>

                </div>

                
                <div className="form-toDoList__group input-group">

                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faMale} />
                      </span>
                    </div>

                  <input
                    id="groom"
                    name= "groom"
                    // value = {}
                    // onChange={}
                    type="text"
                    className="form-control form-toDoList__input"
                    placeholder="Groom Name"
                  />
                  <label className ="Dolist-label" htmlFor="groom"> Groom Name</label>

                </div>

                                
                <div className="form-toDoList__group input-group">

                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faLocationArrow} />
                      </span>
                    </div>

                  <input
                    id="location"
                    name= "location"
                    // value = {}
                    // onChange={}
                    type="text"
                    className="form-control form-toDoList__input"
                    placeholder="Groom Name"
                  />
                  <label className ="Dolist-label" htmlFor="location"> Location</label>

                </div>

                <div className="form-toDoList__group input-group">

                  <DatePicker
                    // selected={doListInput.date}
                    // onChange={date => handleDateChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    id="date"
                    className="form-control form-toDoList__input"
                  />
                   <label className ="Dolist-label" htmlFor="date"> Date</label>
                </div>

                
                <div className="form__group input-group">

                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon className="form__icon fa-2x" icon={faDollarSign} />
                        </span>
                    </div>

                    <input 
                    id="totalBudget"
                    name= "totalBudget"
                    type="number"
                    placeholder="Total Budget"
                    className="form__input"
                    // value = {expensesInput.name}
                    // onChange = {event =>  (event)}
                    required/>
                    <label htmlFor="amount" className="form__label">Total Budget</label>
                
                </div>
                <button 
                //   disabled={!(doListInput.title && doListInput.description)}
                //   onClick= {}
                  className="btn btn btn--pink-toDoList">
                    CREATE
                </button>
            
          </form>
        </div>
    </div>

    )
}

export default Survey;
