import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Login extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <div className="form-header text-center">
                        <h1 className="login-header-text">Sign In</h1>
                    </div>

                    <div className="form-group">
                        <div className='mt-4'>
                            <input className="form-control login-email" type="email" placeholder="Enter your email"/>
                        </div>
                        <div className='mt-4'>
                            <input className="form-control login-password" type="password" placeholder="Enter your password"/>                     
                        </div>
                        <div className='form-submit mt-4 text-center'>
                            <button className="form-control btn btn-secondary btn-login" type="submit">Log In</button>
                        </div>
                        <div className='form-submit mt-4 text-center'>
                            <Link to='/register'><button className="form-control btn btn-secondary btn-create-account" type="submit">Create Account</button></Link>
                        </div>
                    </div>

                    <div className="form-footer text-center mt-4 mb-4">
                        <span className="login-note-text">Forgot your password?</span> 
                    </div>
                </div>
                <div className="col-md-5"></div>
            </div>
        )
    }
}

export default Login;