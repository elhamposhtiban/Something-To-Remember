import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import {Modal,
Button} from "react-bootstrap"
// import {Link} from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {

        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return(

            <Modal show={this.props.show}  >
                <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="form-group">

                            <input
                            type="email"
                            placeholder="Email"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.email
                            })}
                            name="email"
                            onChange={ this.handleInputChange }
                            value={ this.state.email }
                            />
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </div>

                        <div className="form-group">
                            
                            <input
                            type="password"
                            placeholder="Password"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.password
                            })} 
                            name="password"
                            onChange={ this.handleInputChange }
                            value={ this.state.password }
                            />
                            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleModalClose} >
                    Close
                </Button>
                <Button variant="primary btn" type="submit" onClick={ this.handleSubmit }>
                Login User
                </Button>
                </Modal.Footer>
                </Modal>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)








