import React from "react";
import Proptype from "prop-types";
import API from "../../utils/API";
import"./style.css"

const proptype = {
    dolist : Proptype.array.isRequired,
    loadDolist: Proptype.func.isRequired

}


const DolistResult = ({doList,loadDolist }) => {

    //function for handling delete 
    const deleteHandler = event => {
        event.preventDefault();
        console.log("i am doing something for you")
        const deleteId = event.target.getAttribute("data-unique-id");
        // const deleteTask = doList.filter(item => item.id === id);

        // const deleteTaskObj =  
        // {
        //     "title": deleteTask.title,
        //     "description": deleteTask.description,
        // }
        // console.log (deleteTaskObj)
        console.log(deleteId)
        deleteDolist(deleteId)
    }
  
    
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
    
    return (
      
        <div className="card p-3 ToDoList-card">
        <div className="card-title"><h5>Here is your to do list </h5></div>
            <div className="card-body">
                <ul className="list-group">
                    {doList.map(item => (
                    <li className="list-group-item" key={item.id}>

                        <h2>{item.title}</h2>

                        <h4>{item.description}</h4>

                        <p className="img-fluid">{item.date}</p>

                        <button className="btn btn-danger float-right"
                        data-unique-id={item.id}
                        //  value={item.id}
                         onClick= {deleteHandler}> delete this
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