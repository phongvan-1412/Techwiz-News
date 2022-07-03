import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



class Register extends Component{
    render(){
        return(
            <div className="row mb-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="form-header text-center">
                        <h1 className="login-header-text">Create Account</h1>
                    </div>

                    <div className="form-group">
                        <div className='mt-4'>
                            <span className="mb-2 font-weight-bold">Email</span>
                            <input className="form-control login-email" type="email" placeholder="Enter your email"/>
                        </div>
                        <div className='mt-4'>
                            <span className="mb-2 font-weight-bold">Password</span>
                            <input className="form-control login-password" type="password" placeholder="Enter your password"/>                     
                        </div>
                    </div>

                    <div className="form-footer mt-4 mb-4">
                        <span className="font-weight-bold">Display Name</span>
                    </div>

                    <div className="form-footer mt-4 mb-4">
                        <span className="register-footer-note-text">Enter a unique username to comment on articles</span> 
                    </div>

                    <div className='form-submit text-center'>
                        <button className="form-control btn btn-secondary btn-login" type="submit">Create Account</button>
                    </div>

                    <div className='mt-4'>
                        <input className="form-control login-email" type="text" placeholder="Display Name"/>
                    </div>

                    <div className='mt-4'>
                        <input type="radio"/>
                        <span>I have read and agree to the BuffDog News 
                            <Link to='/' className="term-of-use">Terms of Use</Link>  & <Link to='/' className="privacy-policy">Privacy Policy</Link>
                        </span>
                    </div>

                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default Register;