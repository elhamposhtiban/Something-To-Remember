import React from "react";
import PropType from "prop-types";
import  "./style.css"

const propType = {

  doListInput : PropType.array.isRequired,
  handleInputChange : PropType.func.isRequired
    }

const FormDolist = (
  doListInput,
  handleInputChange
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
          
          <label className ="search-label" htmlFor="description">description</label>
          <textarea 
           className="form-control input-dolist"
           name="description"
           value= {doListInput.name}
           id="description"
           placeholder="description"
           onChange={handleInputChange} />
          
          <button 
          disabled={!(doListInput)}
           className="btn btn-success search-btn">
            add to my todo list
          </button>
     
      </div>
    </form>)
}

FormDolist.prototype = propType;

export default FormDolist;



