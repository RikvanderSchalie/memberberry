
/*components*/
import Buttonsign from "../components/Buttonsign";
import Inputemail from "../components/Inputemail";
import Inputpassw from "../components/Inputpassw";
import Inputpassrep from "../components/Inputpassrep";

import React from 'react';
import "./Signinstyle.css";
import { Link } from 'react-router-dom';
import firebase from 'firebase'



const app = firebase.initializeApp({

    apiKey: "AIzaSyDavBMrb2NIs0Cc-OgYClzHmNyU-LEoz4Y",
    authDomain: "memberberry-b2c5a.firebaseapp.com",
    projectId: "memberberry-b2c5a",
    storageBucket: "memberberry-b2c5a.appspot.com",
    messagingSenderId: "648141006624",
    appId: "1:648141006624:web:2676ef2a25bfed49b39945",
    measurementId: "G-7BCCV5X38F"

})




function SigninPage ()

{
    return(
        <div className="background2">
            <div className="greenscreen2">
                <h1 className="titeltekst2">sign in</h1>
                <h3 className="member2">not a member ? <Link to="/Signup">let's sign up</Link></h3>
                <Inputemail></Inputemail>
                <Inputpassw></Inputpassw>

                <Buttonsign></Buttonsign>

            </div>



        </div>



    );
}

export default SigninPage ;



