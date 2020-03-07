import React, {useState, useEffect} from "react";
import FormDolist from "../components/FormDolist/index";
import DolistResult from "../components/DolistResult/index";
import {Col,Row,Container} from "../components/Grid"
import API from "../utils/API";


const Dolist = () => {

      
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
      console.log("hi i am actually grabing the data")
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
          console.log("hi i am success!!")
        } catch (error) {
          console.group("SUBMIT FORM");
          console.log(error);
          console.groupEnd();
        }
      }
    };

    


    return (
        <Container>
        <Row>
            <Col size=" ms-12">
                <FormDolist
                doListInput = {doListInput}
                handleInputChange = {handleInputChange}
                handleFormSubmit = {handleFormSubmit}
                />
            </Col>

            <Col size="md-12">
            {doList.length ?
            <DolistResult
             doList={doList}
             loadDolist= {loadDolist}/>: null}
            </Col>
        </Row>

    </Container>
    )
    
}

export default Dolist;


 

