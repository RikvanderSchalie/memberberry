
/*components*/
import Buttonsign from "../components/Buttonsign";
import Inputemail from "../components/Inputemail";
import Inputpassw from "../components/Inputpassw";
import Inputpassrep from "../components/Inputpassrep";

import React from 'react';
import {useState} from 'react'
import "./Signinstyle.css";
import { Link } from 'react-router-dom';

function SigninPage ()
{
/*// state management
    const [action, setAction] = useState('login')
    console.log ( 'current action state is :', action)*/

// return het visuele component
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



