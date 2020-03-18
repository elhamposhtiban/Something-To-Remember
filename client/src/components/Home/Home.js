import React from "react";

import Carousel from 'react-bootstrap/Carousel'
import Figure from 'react-bootstrap/Figure'
const Home = () => {
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
            <h3></h3>
          
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
            src="https://www.brides.com/thmb/8Rvt7SaouAlrdp_L_4Es0feG4uE=/2400x2400/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1931e79abd092cf4bd393a__11-f2d4ff86cd6b4e1bb09ba0dab4d10068.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
         
          
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

        
      </Carousel>
      <br>
      </br>
      <h1> WELL…HELLO THERE! </h1>
      <p> As an elite full-service event planning company, the mission is to take the stress out of the wedding day by using skilled training and vast experience to arrange and oversee every detail and bring the client’s vision to reality. We're thrilled you are visting, and hope this is the first step of your wonderful wedding planning journey with us!  Here's a bit about us ...
       </p>
       <div> 
         <br>
         </br>
         <Figure>
         <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://avatars0.githubusercontent.com/u/55073793?s=460&u=d0b50bac586a6ec3294fcf8b97a2b4171e1627ce&v=4" 
  />
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://avatars1.githubusercontent.com/u/55120923?s=400&u=56607acaf29e696bf905fa6146784f2dd58c1dc0&v=4"
  />

</Figure>
         <h1>
            Makah Abutahoun&Elham Poshtiban. </h1>
         
           
         
       </div>
    
     
      
       </section>
       
      
    )
}

export default Home;




