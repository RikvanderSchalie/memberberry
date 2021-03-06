
import React from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';
import {useState} from 'react'
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import app from '../components/Firebase';
/*components*/


function SigninPage (){

// state management
    const [action, setAction] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState()
    const history = useHistory();

// Handle submit
    async function onSubmit(e){

// Prevent page reload
        e.preventDefault()

//registratie met try catch

        try {

            if( action === 'login') {
                const userCredential = await app.auth().signInWithEmailAndPassword(email, password)
                console.log('logged in', userCredential)
                setUser(userCredential.user)
                history.push("/home");
            }
            if ( action == 'register'){
                const userCredential = await app.auth().createUserWithEmailAndPassword(email, password)
                console.log('registered', userCredential)
                setUser(userCredential.user)
            }
        }    catch (e) {
            console.error( 'firebase fail :', e)
        }
    }
// return het visuele component
    return(
        <div className="background1">
            <div className="greenscreen1">
                <h1 className="titeltekst1">sign in</h1>
                <h3 className="member1">Member ? <Link to="/Signup">let's sign up</Link></h3>

                <form onSubmit={onSubmit}>
                    <input
                        onChange={e => setEmail (e.target.value)}
                        value={ email }
                        type="email"
                        name='email'
                        className="signupcomp"
                        placeholder="  &#128232;   Email"
                    />

                    <input
                        onChange={e => setPassword (e.target.value)}
                        value={ password }
                        type="password"
                        name='password'
                        className="passwordcomp"
                        placeholder="  &#128272;   Password"
                    />

                    <button
                        className="buttonsgn"
                        type='submit' value={action}
                    >Go !</button>

                </form>

                {/*               <Inputpassw></Inputpassw>
               <Buttonsign></Buttonsign>*/}

            </div>
        </div>

    );
}

export default SigninPage ;



