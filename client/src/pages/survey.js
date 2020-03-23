import React, {useState, useEffect, Fragment} from "react";
import {useSelector} from "react-redux";
import API from "../utils/API";
import SurveyForm from "../components/SurveyForm/index";




const Survey = (props) => {

    const result = useSelector (state => state.auth.user)
    console.log( "this is result", result)
   
    const [weddingProfile, setWeddingProfile] = useState([]);
  
      //this state getting info from input 
    const [surveyInput, setSurveyInput] = useState(
        {
          brideName: "",
          groomName: "",
          location: "",
          totalBudget: Number,
          date: new Date(),
        }
    );
  

  
    const onchangeSurveyHandler = (e) => {
        const {name, value} = e.target;
        setSurveyInput({
            ...surveyInput,
            [name] :value
           
        })
        console.log(surveyInput)
    }
  
    const handleDateSurvey= date => {
      setSurveyInput({
        ...surveyInput,
       date : date
      });
      console.log(surveyInput)
  
    };
  
  
  
    useEffect(() => {
      loadWeddingProfile();
    }, []);
  
  
    // Loads all weddingProfile  and sets them to DoListLoad
    const loadWeddingProfile = async () => {
      try {
        const response = await API.getAllWedding();
        setWeddingProfile(response.data);
        console.log('wedding profile', response.data)
      } catch (error) {
        console.group("it can not load wedding profile");
        console.log(error);
        console.groupEnd();
      }
    };
  
  
    const handleSubmitProfile = async event => {
      console.log("hi i am actually getting the data for wedding profile")
      event.preventDefault();
      if (surveyInput.brideName && surveyInput.groomName) {
        try {
          await API.saveWedding({
            ...surveyInput,
            user_id: result.id
          });
          setWeddingProfile({
              brideName: "",
              groomName: "",
              location: "",
              totalBudget: "",
              date: new Date(),
            
          });
          loadWeddingProfile();
          props.history.push("dashboard");
          console.log("success wedding profile")
        } catch (error) {
          console.group("SUBMIT FORM");
          console.log(error);
          console.groupEnd();
        }
      }
    };
    
        
    return( 
      
      <React.Fragment>
            
            <SurveyForm
            onchangeSurveyHandler ={onchangeSurveyHandler}
            handleDateSurvey ={handleDateSurvey}
            handleSubmitProfile = {handleSubmitProfile}
            loadWeddingProfile = {loadWeddingProfile}
            surveyInput = {surveyInput}
            />

      </React.Fragment>
      )
  }
  
  export default Survey;





