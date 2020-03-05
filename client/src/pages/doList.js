import React, {useState} from "react";
import FormDolist from "../components/FormDolist/index"


const Dolist = () => {


    const [doList, setDolist] = useState([]);

    const [doListInput, setDolistInput] = useState({
        title: "",
        description: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setDolistInput({
          ...doListInput,
          [name]: value
        });
      };

    return (
        <FormDolist
        handleInputChange = {handleInputChange}
        doListInput = {doListInput}/>
    )
    
}

export default Dolist;


 

