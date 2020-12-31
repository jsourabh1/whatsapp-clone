import React from 'react'
import './Login.css'
import {auth,provider} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {
    // eslint-disable-next-line no-empty-pattern

    const [{},dispatch]=useStateValue();


    const SignIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,

            })
        })

    };
    return (
        <div className='login_page'>
            <div className='login_container'>
                <div className="login_text">


                    <img src="https://thumbs.dreamstime.com/b/whatsapp-logo-icon-voronezh-russia-november-square-blue-color-164586315.jpg" />
                    <div className='text'>
                        Whatsapp Login
                    </div>
                </div>
                <div className='but'>
                    <button onClick={SignIn} className='login_button'>Log in with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
