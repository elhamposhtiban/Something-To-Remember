import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { LanguageProvider } from '../containers/Languages';
import LanguageSelector from '../lang/LanguageSelector';
import {useSelector} from "react-redux"
import Explore from '../lang/Explore';



const Home = () => {
  const result = useSelector (state => state.auth.user)
  console.log( "this is result", result)

    return ( 

      <section className="section-home">
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

        {/* <Carousel.Item className="carousel">
          <img
            className="d-block w-100 carousel__img"
            src="https://www.brides.com/thmb/8Rvt7SaouAlrdp_L_4Es0feG4uE=/2400x2400/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1931e79abd092cf4bd393a__11-f2d4ff86cd6b4e1bb09ba0dab4d10068.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>4thslide label</h3>
          
          </Carousel.Caption>
        </Carousel.Item>  */}

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

