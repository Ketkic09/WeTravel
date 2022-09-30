import React from 'react'
import './SignUp.css'
import bgimg from './../../images/img-11.jpg'
import Footer from '../Footer'
import {SiYourtraveldottv} from 'react-icons/si'

export default function SignUp() {
    return (
    <>  
        <div className="background" style={{ backgroundImage:`url(${bgimg})` }}>
            <h1>&nbsp;</h1>
            <div className="form-container"  >
              
                <div className="form-content-left">
                    
                    <SiYourtraveldottv className="form-img" />
                    
                </div>
                
                <div className="form-content-right">
                <h1 className='form-heading'>Register yourself</h1>
                    <form  className='form'>
                        
                        <div className="form-inputs">
                            <label className="form-label" htmlFor='name'>
                                <h3>Name</h3>
                            </label>
                            <input type="text" className="form-input" name="name" placeholder='Enter your full name'/>
                        </div>
                        <div className="form-inputs">
                            <label className="form-label" htmlFor='username'>
                                <h3>Username</h3>
                            </label>
                            <input type="text" className="form-input" name="username" placeholder='Enter your username'/>
                        </div>

                        <div className="form-inputs">
                            <label className="form-label" htmlFor='email'>
                            <h3>Email</h3>
                            </label>
                            <input type="email" className="form-input" name="email" placeholder='Enter your email'/>
                        </div>

                        
                        <div className="form-inputs">
                            <label className="form-label" htmlFor='password1'>
                            <h3>Password</h3>
                            </label>
                            <input type="password" className="form-input" placeholder='Set your password' name='password1'/>
                        </div>

                        <div className="form-inputs">
                            <label className="form-label" htmlFor='password2'>
                                Confirm Password
                            </label>
                            <input type="password" className="form-input" name="password2" placeholder='Enter same password again' />
                        </div>
                        <button className="form-input-btn" type='submit' >Sign Up</button>
                    <span className='form-input-login'>Already have an account?<a href='#'>&nbsp;login</a></span>
                        
                    </form>
                    
                </div>
            </div>
        </div>
        <Footer />
    </>    
    )
}