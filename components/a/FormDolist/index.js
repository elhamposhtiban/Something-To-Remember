import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"



const FormDolist = (
  { doListInput,
    handleInputChange,
    handleFormSubmit,
    handleDateChange}
) => {

  const [startDate, setStartDate] = useState(new Date());
    return( 
      
      <form>
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
    </form>
    
    )
}

export default FormDolist;



