
import React from "react";
import {useSelector} from "react-redux"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFemale,
    faMale,
    faLocationArrow,
    faDollarSign,
   } from "@fortawesome/free-solid-svg-icons";

const SurveyForm = (
  {
    onchangeSurveyHandler,
    handleDateSurvey,
    handleSubmitProfile ,
    surveyInput,
  }
) => {
  const result = useSelector (state => state.auth.user)
  console.log( "this is result", result)
    return( 
      
      <section className="section-survey">

        <div className="Survey"> 
          <div className="Survey__form">
            <form className = " form-survey">

                <div className="form-survey__group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form-survey__icon fa-2x" icon={faFemale} />
                      </span>
                    </div>
                    <input
                        id="bride"
                        name= "brideName"
                        value = {surveyInput.name}
                        onChange={onchangeSurveyHandler}
                        type="text"
                        className="form-control form-survey__input"
                        placeholder="Bride Name"
                    />
                    <label className ="form-survey__label" htmlFor="bride"> Who's the lucky bride</label>
                </div>
                
                <div className="form-survey__group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form-survey__icon fa-2x" icon={faMale} />
                      </span>
                    </div>
                    <input
                        id="groom"
                        name= "groomName"
                        value = {surveyInput.name}
                        onChange={onchangeSurveyHandler}
                        type="text"
                        className="form-control form-survey__input"
                        placeholder="Groom Name"
                    />
                    <label className ="form-survey__label" htmlFor="groom"> Who's the lucky groom</label>
                </div>
                                
                <div className="form-survey__group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form-survey__icon fa-2x" icon={faLocationArrow} />
                      </span>
                    </div>
                    <input
                        id="location"
                        name= "location"
                        value = {surveyInput.name}
                        onChange={onchangeSurveyHandler}
                        type="text"
                        className="form-control form-survey__input"
                        placeholder="Location"
                    />
                    <label className ="form-survey__label" htmlFor="location">Location</label>
                </div>

                <div className="form-survey__group input-group">
                  <DatePicker
                    selected={surveyInput.date}
                    onChange={date => handleDateSurvey(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    id="date"
                    className="form-control form-survey__input"
                  />
                   <label className ="form-survey__label" htmlFor="date"> Date </label>
                </div>

                <div className="form-survey__group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon className="form-survey__icon fa-2x" icon={faDollarSign} />
                        </span>
                    </div>
                    <input 
                    id="totalBudget"
                    name= "totalBudget"
                    type="number"
                    placeholder="Total Budget"
                    className="form-survey__input"
                    value = {surveyInput.name}
                    onChange={onchangeSurveyHandler}
                    required/>
                    <label htmlFor="totalBudget" className="form-survey__label">Total Budget</label>
                
                </div>
               
                <button 
                //   disabled={!(doListInput.title && doListInput.description)}
                   onClick= {handleSubmitProfile}
                  className="btn btn btn--pink-toDoList">
                    done!
                </button>
            
          </form>
        </div>
        </div>
    </section>
    )
}
export default SurveyForm;
