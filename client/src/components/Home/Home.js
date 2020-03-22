import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'
import { LanguageProvider } from '../../containers/Languages';
import LanguageSelector from '../lang/LanguageSelector';
import {useSelector} from "react-redux"
import Explore from '../lang/Explore';
import API from "../../utils/API";




const Home = ({}) => {
  
  const result = useSelector (state => state.auth.user)
  console.log( "this is result", result)

  const [showName, setShowName] = useState({})

  const userId = result.id

  useEffect(() => {
    const displayName = async function() {
      const showNames = await displayObj();
      setShowName(showNames);
    }
    displayName();
  }, []);
  

  const displayObj = async () => {
    try {
      const response = await API.getAllByUserIdWedding(userId);
      console.log('wedding profile', response.data)
      return response.data[0] 

    } catch (error) {
      console.group("it can not load wedding profile");
      console.log(error);
      console.groupEnd();
    }

  };

  // const currentDate = new Date ().toDateString();

  // console.log(currentDate)

  // // const diffTime = showName.date - currentDate; 
  // console.log(showName.date)

 

  

    return ( 

      <section className="section-home">
    <ul className="list-group">
      { showName?  
          <li className=" ToDoList__item" >
              <div className=" ToDoList__data">

              <h1> HI {showName.brideName} & {showName.groomName} </h1>
               {/* <h2> hey you have :  { diffTime}  left</h2> */}

      
              </div>
          </li> : null
      } 
      </ul>

      <Carousel className="carousel" >
            
        <Carousel.Item className="carousel" >
          <img
            className="d-block w-100 carousel__img"
            src="https://images.303magazine.com/uploads/2019/03/wedding-celebration.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          
          </Carousel.Caption>
        </Carousel.Item >

        <Carousel.Item className="carousel">
          <img
            className="d-block w-100 carousel__img"
            src="https://s23527.pcdn.co/wp-content/uploads/2018/04/weddings-3225110_1920.jpg.optimal.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
          
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel">
          <img
            className="d-block w-100 carousel__img"
            src="https://www.brides.com/thmb/8Rvt7SaouAlrdp_L_4Es0feG4uE=/2400x2400/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1931e79abd092cf4bd393a__11-f2d4ff86cd6b4e1bb09ba0dab4d10068.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
          
          </Carousel.Caption>
        </Carousel.Item> 

        <Carousel.Item className="carousel">
          <img
            className="d-block w-100 carousel__img"
            src="https://www.brides.com/thmb/oh7NFl5QEsxMKjKT7E5-IkI9-3I=/2048x1152/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1a91636b6bc209f4038244__169-1adbafcbb5c146aca5b1e969d9c1a961.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>4th slide label</h3>
           
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

<br></br>

    <LanguageProvider>
          <div className="App">
          <header className="App-header">
              <LanguageSelector />
          </header>

             <Explore />
        </div>
    </LanguageProvider>
        </section>
    );
}
export default Home;

