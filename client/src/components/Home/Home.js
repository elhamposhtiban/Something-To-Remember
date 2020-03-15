import React from "react";



const Home = () => {
    return (
        <section className="section-home">
            <h1> this is a home page</h1>
        </section>
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