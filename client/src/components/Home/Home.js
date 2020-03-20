import React from "react";
import Carousel from 'react-bootstrap/Carousel'
// import { LanguageProvider } from '../../containers/Languages';
// import LanguageSelector from '../lang/LanguageSelector';
// import Explore from '../lang/Explore';



const Home = () => {


    return ( 

      <section className="section-home">
    {/* // <LanguageProvider> */}
    //   <div className="App">
    //     <header className="App-header">
    {/* //       <LanguageSelector /> */}
    //     </header>

    //     <Explore />
    //   </div>
    {/* // </LanguageProvider> */}

        <Carousel className="carousel" >
            
        <Carousel.Item className="carousel" >
          <img
            className="d-block w-100 carousel__img"
            src="https://images.303magazine.com/uploads/2019/03/wedding-celebration.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
        </section>
    );
}
export default Home;

