import React, {useState} from "react";
import Proptype from "prop-types";
// import ToDolistCard from "../TodoCard"
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faTrash,
    faCheck
} from "@fortawesome/free-solid-svg-icons";



const proptype = {
    dolist : Proptype.array.isRequired,
    loadDolist: Proptype.func.isRequired,
    handleInputChange : Proptype.func.isRequired,
    handleDateChange: Proptype.func.isRequired,
    doListInput: Proptype.string.isRequired
}


const DolistResult = ({
    doList,
    loadDolist,
    handleInputChange,
    doListInput,
    setDolistInput,
    handleDateChange }) => {


// here i am using separate state in order to edit each input
    const [editTitle, setEditTitle] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [editDate, setEditDate] = useState(false);

    

    //function for handling delete 
    const deleteHandler = event => {
        event.preventDefault();

        const deleteId = event.target.getAttribute("data-unique-id");
        console.log(deleteId)

        deleteDolist(deleteId)
    }
  
    //function for  delete to do list
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

            const updateToDo = doList.filter(item => item.id === updateId);

            console.log(updateId)
            console.log(updateToDo)

            updateDolist(updateToDo)
        }

        const updateDolist = async (updateToDo) => {
            try {
              await API.UpdateDolist(updateToDo);

              setDolistInput({
                title: "",
                date: new Date(),
                description: "",
              });

              loadDolist();

            } catch(error) {
              console.group("hey i can not update to do list for you");
              console.log(error);
              console.groupEnd();
            }
          };
    
    return (
       

        <div className="card p-3 ToDoList-card">

            <div className="card-title"><h5>Here is your to do list </h5></div>
            <div className="card-body">
           
                <ul className="list-group">
                    {doList.map(item => (
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
                            </div>:
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
            

                    ))}
                </ul>
                
            </div>
        </div>


    )
}

DolistResult.prototype = proptype
export default DolistResult;












                        {/* <h2>{item.title}</h2> */}

                        {/* <h4>{item.description}</h4> */}
                        {/* 
                        <p className="img-fluid">{item.date}</p> */}


 // function for showing edit part
    // const [showEdit, setShowEdit] = useState(false)
    // const showEditHandler = () => {
    //     setShowEdit(!showEdit);
    // }







{/* <div className="App">
{editThis ?
   <input name="name" type="text" value={name} /> :
   <div
    onClick={() => setEditThis(true)}
   >
    {name}
  </div>
}
</div> */}



{/* <ToDolistCard
handleInputChange = {handleInputChange}
doListInput = {doListInput}
doList = {doList}
handleDateChange = {handleDateChange}
showEditHandler = {showEditHandler}
deleteHandler = {deleteHandler}
updateHandler = {updateHandler}
item={item}
/> */}






{/* <button type="button" 
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
} */}



// const [titleInput, setTitleInput] = useState( "")
// const [dateInput, setDateInput] = useState( "")
// const [descriptionInput, setDescriptionInput] = useState( new Date())



// const handleTitleChange = event => {
//     setTitleInput(event.target.value)
//     console.log(titleInput)

//   };

//   const handleDescriptionChange = event => {
//     setDescriptionInput(event.target.value)
//     console.log(descriptionInput)

//   };

//   const handleDate1Change= date => {
//     setDateInput(date.target.date)
//     console.log(dateInput)

//   };