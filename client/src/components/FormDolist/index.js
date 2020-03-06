import React, {useState, useEffect} from "react";
import  "./style.css"
import API from "../../utils/API"


const FormDolist = (
) => {

  
  const [doList, setDolist] = useState([]);

  const [doListInput, setDolistInput] = useState({
      title: "",
      date:"",
      description: ""
  });


  useEffect(() => {
    loadDolist();
  }, []);

  // Loads all DolistloadDolist  and sets them to DolistloadDolist
  const loadDolist = async () => {
    try {
      const response = await API.getAllDolist();
      setDolist(response.data);
      console.log('todos', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };

  const handleInputChange = event => {
      const { name, value } = event.target;
      setDolistInput({
        ...doListInput,
        [name]: value
      });
      console.log(doListInput)

    };


    const handleFormSubmit = async event => {
      event.preventDefault();
      if (doListInput.title && doListInput.description) {
        try {
          await API.saveDolist({
            ...doListInput,
          });
          setDolistInput({
            title: "",
            date:"",
            description: "",
          });
          loadDolist();
        } catch (error) {
          console.group("SUBMIT FORM");
          console.log(error);
          console.groupEnd();
        }
      }
    };
  

    return( 
      
      <form>
      <div className="form-group form-dolist">

          <label className ="search-label" htmlFor="dolist">title</label>
          <input
            id="dolist"
            name= "title"
            value = {doListInput.name}
            onChange={(event) => handleInputChange(event)}
            type="text"
            className="form-control input-dolist"
            placeholder="title"
          />

          <label className ="search-label" htmlFor="datelist">title</label>
          <input
            id="datelist"

            name= "date"
            value = {doListInput.name}
            onChange={(event) => handleInputChange(event)}
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
           onChange={(event) => handleInputChange(event)} 
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



