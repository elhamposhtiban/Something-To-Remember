import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import Login from "./Login"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faKey,
    faEnvelope,
    faUser
} from "@fortawesome/free-solid-svg-icons";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {},
            show: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history)
    }
    handleModal () {
    this.setState({show:true})
    }
    handleModalClose () {
        this.setState({show:false})
        }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    render() {
        const { errors } = this.state;
        return(
            <React.Fragment>
            <div className="card register__form-card">
                <div className="card-header">
                    <h3>Sign up</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text">
                            <FontAwesomeIcon className="form__icon fa-2x" icon={faUser} /> 
                            </span>
                            </div>
                            <input
                            type="text"
                            placeholder="Full Name"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.name
                            })}
                            name="name"
                            onChange={ this.handleInputChange }
                            value={ this.state.name }
                            />
                            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text">
                            <FontAwesomeIcon className="form__icon fa-2x" icon={faEnvelope} /> 
                            </span>
                            </div>
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
                        <div className="form-group input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text">
                                <FontAwesomeIcon className="form__icon fa-2x" icon={faKey} /> 
                                </span>
                                </div>
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
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                               <span className="input-group-text">
                                <FontAwesomeIcon className="form__icon fa-2x" icon={faKey} /> 
                                </span>
                            </div>
                            <input
                            type="password"
                            placeholder="Confirm Password"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.password_confirm
                            })}
                            name="password_confirm"
                            onChange={ this.handleInputChange }
                            value={ this.state.password_confirm }
                            />
                            {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                        </div>
                        <p id="terms">By signing up, you agree to out <span id="boldFont">Terms, Data Policy, and Cookies Policy </span>.
                        </p>
                        <div className="form-group input-group">
                            <button  type="submit" className="btn btn-primary">
                                SIgn Up
                            </button> 
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        <button type="button" className="btn modal-button" onClick={this.handleModal}>
                            Have an account? Login 
                        </button>
                    </div>
                </div>
                <Login
                show= {this.state.show}
                handleModalClose = {this.handleModalClose}
                />
            </div>
</React.Fragment>
        )
    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))



{/* <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Registration</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                    })}
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
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
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password_confirm
                    })}
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </div>
                <div className="form-group">
                {/* <Link to='/somewhere'> */}
        //             <button  type="submit" className="btn btn-primary">
        //                 Register User
        //             </button> 
        //             {/* </Link> */}
        //         </div>
        //     </form>
        // </div> */}
