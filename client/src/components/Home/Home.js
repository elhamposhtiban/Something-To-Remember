import React from "react";
import Carousel from 'react-bootstrap/Carousel'


const Home = () => {
    return (
      
        <Carousel>
            
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.303magazine.com/uploads/2019/03/wedding-celebration.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s23527.pcdn.co/wp-content/uploads/2018/04/weddings-3225110_1920.jpg.optimal.jpg"
            alt="Third slide"
       
            
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.brides.com/thmb/8Rvt7SaouAlrdp_L_4Es0feG4uE=/2400x2400/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1931e79abd092cf4bd393a__11-f2d4ff86cd6b4e1bb09ba0dab4d10068.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.brides.com/thmb/oh7NFl5QEsxMKjKT7E5-IkI9-3I=/2048x1152/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__brides__proteus__5c1a91636b6bc209f4038244__169-1adbafcbb5c146aca5b1e969d9c1a961.jpeg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>4th slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
    )
}

export default Home;






// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logoutUser } from '../actions/authentication';
// import { withRouter } from 'react-router-dom';
// class Home extends Component {
//     onLogout(e) {
//         e.preventDefault();
//         this.props.logoutUser(this.props.history);
//     }
//     render() {
//         const {isAuthenticated, user} = this.props.auth;

//         return(
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <Link className="navbar-brand" to="/">Home Page</Link>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ml-auto">
//                 <a href="/#" className="nav-link" onClick={this.onLogout.bind(this)}>
//                     <img src={user.avatar} alt={user.name} title={user.name}
//                         className="rounded-circle"
//                         style={{ width: '25px', marginRight: '5px'}} />
//                             Logout
//                 </a>
//             </ul>
//                 </div>
//             </nav>
//         )
//     }
// }
// Home.propTypes = {
//     logoutUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired
// }
// const mapStateToProps = (state) => ({
//     auth: state.auth
// })
// export default connect(mapStateToProps, { logoutUser })(withRouter(Home));