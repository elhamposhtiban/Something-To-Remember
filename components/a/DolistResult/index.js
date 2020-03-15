import React, {useState} from "react";
import Proptype from "prop-types";
<<<<<<< HEAD:client/src/components/DolistResult/index.js
import ToDolistCard from "../TodoCard"
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faTrash,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

=======
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';
import API from "../utils/API";
>>>>>>> master:components/a/DolistResult/index.js


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


// // here i am using separate state in order to edit each input
//     const [editTitle, setEditTitle] = useState(false);
//     const [editNote, setEditNote] = useState(false);
//     const [editDate, setEditDate] = useState(false);

    

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

        

        const updateDolist = async (updateId, updateToDo) => {
            try {
              await API.UpdateDolist(updateId,updateToDo );

              console.log(updateId)

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

        
                <ul className="list-group ToDoList__list">
                    {doList.map(item => (

                        <ToDolistCard
                        key={item._id}
                        handleInputChange = {handleInputChange}
                        doListInput = {doListInput}
                        doList = {doList}
                        handleDateChange = {handleDateChange}
                        deleteHandler = {deleteHandler}
                        item={item}
                        />
            
                    ))}
                </ul>
                


    )
}

DolistResult.prototype = proptype
export default DolistResult;





