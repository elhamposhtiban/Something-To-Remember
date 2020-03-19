import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/authentication';



class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;

    return(
    
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi_toggle"/>
        <label htmlFor="navi_toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background"></div>
        <nav className="navigation__nav">
            <ul className="navigation__list">

                <li className="navigation__item"><a href="/dashboard" className="navigation__link">Dash Board</a></li>
                <li className="navigation__item"><a href="/#" className="navigation__link">contact</a></li>
                <li className="navigation__item"><a href="/dolist" className="navigation__link">check list</a></li>
                <li className="navigation__item"><a href="/budget" className="navigation__link">budgeter</a></li>
                <li className="navigation__item">
                <a href="/register" className="navigation__link" onClick={this.onLogout.bind(this)}>
                <img src={user.avatar} alt={user.name} title={user.name}
                className="rounded-circle"
                style={{ width: '25px', marginRight: '5px'}} />
                Logout</a></li>
            
            </ul>
        </nav>
      </div>

    )
}

}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser } )(withRouter(Navbar));

