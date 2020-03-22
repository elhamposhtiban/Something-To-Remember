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
      console.log("this is show names",showNames)
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
                
              
              </Carousel.Caption>
            </Carousel.Item >
    
            <Carousel.Item className="carousel">
              <img
                className="d-block w-100 carousel__img"
                src="https://s23527.pcdn.co/wp-content/uploads/2018/04/weddings-3225110_1920.jpg.optimal.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
              
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel">
              <img
                className="d-block w-100 carousel__img"
                src="https://californiaweddingday.com/sites/default/files/CWD/online/realweddings/sara_danny/1B1A2181.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                
               
              </Carousel.Caption>
            </Carousel.Item>
    
            <Carousel.Item className="carousel">
              <img
                className="d-block w-100 carousel__img"
                src="https://images.squarespace-cdn.com/content/v1/570b04d32eeb819034cca091/1461878935465-VJ39LPXYLI47OV4QYDDK/ke17ZwdGBToddI8pDm48kJtsZFmkn0vlL84AeVJ0sQd7gQa3H78H3Y0txjaiv_0fp_mq1AZEKQalsDjhaHkwoqUnZsVrR84hBHFZcSX3PY1NgQScQZEPAo_oDhToEdDpZGjoBKy3azqku80C789l0hReLB75oIvKxcDxwlnLXabjozB0jfAon2Pyt7VR2FcPrGrPNC6ntOZxogQgwkEsng/image-asset.jpeg?format=1000w"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>4thslide label</h3>
              
              </Carousel.Caption>
            </Carousel.Item> 
    
            <Carousel.Item className="carousel">
              <img
                className="d-block w-100 carousel__img"
                src="https://www.brides.com/thmb/oh7NFl5QEsxMKjKT7E5-IkI9-3I=/2048x1152/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1a91636b6bc209f4038244__169-1adbafcbb5c146aca5b1e969d9c1a961.jpeg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
              
               
              </Carousel.Caption>
            </Carousel.Item>
          
               
            <Carousel.Item className="carousel">
              <img
                className="d-block w-100 carousel__img"
                src="https://www.easyweddings.com.au/articles/wp-content/uploads/sites/5/2018/11/iStock-929779474-1920x1402.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
              
               
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

