import React from 'react'
import './Css/SignUp.css'
import googleIcon from './Images/google-icon 1.svg'
import appleIcon from './Images/apple 1.svg'
import {auth,provider} from "../firebase-config.js"
import {signInWithPopup} from "firebase/auth"

import Cookies from "universal-cookie"
const cookies=new Cookies();

const SignUp = (props) => {
    const{setIsAuth}=props;
    const handleClick=async ()=>{
        try{
        const result=await signInWithPopup(auth,provider);
        console.log(result);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true)
        }
        catch(err){
            console.error(err);
        }
    }
    
    return (
        <div className='row'>
            <div className='column-1'>
                <p>
                    Board.
                </p>
            </div>
            <div className='column-2'>
                <div className="row-2">
                    <p>Sign In</p>
                    <h3>Sign in to your account</h3>
                </div>
                <div className='row-3'>
                    <button onClick={handleClick} className="col-1" type="button">
                        <div class="google"><img src={googleIcon} alt="googl" /></div>Sign in with Google</button>

                    <button className="col-2" type="button"><div class="apple"><img src={appleIcon} alt="appl" /></div>Sign in with Apple</button>
                </div>
                <div className="form">
                    <p>Email address</p>
                    <input class="email" type="text" placeholder='Enter your Email' />
                    <p>Password</p>
                    <input class="password" type="password" placeholder='Enter your Password' />
                    <div>
                        <a class="f-password" href='/'>Forget password?</a>
                    </div>
                    <div>
                        <button type='submit' class="sign-in">Sign In</button>
                    </div>
                </div>
                <div class="no-account">Don't have an account?<span><a className="register" href="/">Register here</a></span></div>
            </div>
        </div>
    )
}

export default SignUp
