import React from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';

/*components*/
import Buttonsign from "../components/Buttonsign";
import Inputemail from "../components/Inputemail";
import Inputpassw from "../components/Inputpassw";
import Inputpassrep from "../components/Inputpassrep";



function SignUpPage ()

{
    return(
        <div className="background1">
           <div className="greenscreen1">
               <h1 className="titeltekst1">sign up</h1>
               <h3 className="member1">Member ? <Link to="/Signin">let's sign in</Link></h3>
               <Inputemail></Inputemail>
               <Inputpassw></Inputpassw>
               <Inputpassrep></Inputpassrep>
               <Buttonsign></Buttonsign>

           </div>



        </div>



    );
}

export default SignUpPage ;