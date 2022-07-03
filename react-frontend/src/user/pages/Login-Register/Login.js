import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 login-page">
                    <div className="row login-header">
                        <h1 className="col-md-12">Sign In</h1>
                    </div>

                    <div className="row login-form ">
                        <form className="container ">
                            <input className="row login-email" type="email" placeholder="Enter your email"/>
                            <input className="row login-password" type="password" placeholder="Enter your password"/>
                            <button className="row btn-login" type="submit">Log In</button>
                            <button className="row btn-create-account" type="submit">Create Account</button>
                        </form>
                    </div>

                    <div className="row login-note">
                        <span className="col-md-12">Forgot your password?</span>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default Login;