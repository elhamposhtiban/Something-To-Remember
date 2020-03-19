import React from "react";
import Proptype from "prop-types";
import ToDolistCard from "../TodoCard"
import API from "../../utils/API";




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
    handleDateChange }) => {


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

        
        // const updateDolist = async (updateId, updateToDo) => {
        //     try {
        //       await API.UpdateDolist(updateId,updateToDo );

        //       console.log(updateId)

        //       setDolistInput({
        //         title: "",
        //         date: new Date(),
        //         description: "",
        //       });

        //        loadDolist();

        //     } catch(error) {
        //       console.group("hey i can not update to do list for you");
        //       console.log(error);
        //       console.groupEnd();
        //     }
        //   };
    
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
