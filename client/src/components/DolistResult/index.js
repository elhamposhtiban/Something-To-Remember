import React from "react";
import Proptype from "prop-types"
import"./style.css"

const proptype = {
    dolist : Proptype.array.isRequired,
}


const DolistResult = ({doList}) => {


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

                        {/* <button className="btn btn-success float-right"
                         data-unique-id={item.id}
                         onClick= {saveToDB}>save
                        </button> */}
                   
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

DolistResult.prototype = proptype
export default DolistResult;