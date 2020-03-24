import React, {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'
import { LanguageProvider } from '../containers/Languages';
import LanguageSelector from '../lang/LanguageSelector';
import {useSelector} from "react-redux"
import Explore from '../lang/Explore';
import API from "../../utils/API";
import logo from '../../assets/logo.png';




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


  const logoStyle = {
    backgroundImage: `url(${logo})`
  };

  // const currentDate = new Date ().toDateString();

  // console.log(currentDate)

  // // const diffTime = showName.date - currentDate; 
  // console.log(showName.date)

 

  

    return ( 

      <section className="section-home">

 

              <div className=" couple-name">

                    <div className=" couple-name__text">

                      { showName? 

                      <div className=" couple-name__text-main">

                        <p>  {showName.brideName} & {showName.groomName}'s wedding </p>

                      </div>
                      : null

                      } 
                      <div className=" couple-name__text-sub">
                      <p>  congrats, you two! </p>
                      </div>
                
                    </div>
                         
               {/* <h2> hey you have :  { diffTime}  left</h2> */}

      
              </div> 

            <div className="row">
              
              <div className="col-2-of-2">

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
                      src="https://www.photoweds.com/public/Files/rif000002/1420/photographer_weddings_italy_07.jpg"
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

                  <Carousel.Item className="carousel">
                    <img
                      className="d-block w-100 carousel__img"
                      src="https://hitchedukir.hitched.co.uk/Temp/1000_1000_scaled_2148306_borthwick-ca-20190105111825227.jpg"
                      alt="Third slide"
                    />
                
                    <Carousel.Caption>
                    
                    
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item className="carousel">
                    <img
                      className="d-block w-100 carousel__img"
                      src="https://www.photoweds.com/public/Files/rif000002/1163/photographer_weddings_ravello_10.jpg"
                      alt="Third slide"
                    />
                
                    <Carousel.Caption>
                    
                    
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item className="carousel">
                    <img
                      className="d-block w-100 carousel__img"
                      src="https://www.photoweds.com/public/Files/rif000002/1246/photography_weddings_sorrento_16.jpg"
                      alt="Third slide"
                    />
                
                    <Carousel.Caption>
                    
                    
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item className="carousel">
                    <img
                      className="d-block w-100 carousel__img"
                      src="https://www.photoweds.com/public/Files/rif000002/1398/wedding_photographer_pienza_20.jpg"
                      alt="Third slide"
                    />
                
                    <Carousel.Caption>
                    
                    
                    </Carousel.Caption>
                  </Carousel.Item>

            </Carousel>
              </div>

            </div>



<br></br>

    <LanguageProvider>
        <div className="App about">
          <header className="App-header">
              <LanguageSelector />
          </header>
          <hr/>
             <Explore />
        </div>
    </LanguageProvider>
        </section>
    );
}
export default Home;

