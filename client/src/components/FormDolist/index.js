import React from "react";
import  "./style.css"


const FormDolist = (
  { doListInput,
    handleInputChange,
    handleFormSubmit}
) => {

    return( 
      
      <form>
      <div className="form-group form-dolist">

          <label className ="search-label" htmlFor="dolist">title</label>
          <input
            id="dolist"
            name= "title"
            value = {doListInput.name}
            onChange={handleInputChange}
            type="text"
            className="form-control input-dolist"
            placeholder="title"
          />

          <label className ="search-label" htmlFor="datelist">due date</label>
          <input
            id="datelist"
            name= "date"
            value = {doListInput.name}
            onChange={handleInputChange}
            type="date"
            className="form-control input-dolist"
            placeholder="date"
          />
          
          <label className ="search-label" htmlFor="description">description</label>
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
           className="btn btn-success search-btn">
            add to my todo list
          </button>
     
      </div>
    </form>)
}

export default FormDolist;



