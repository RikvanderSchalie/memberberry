import React from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';


function SignUpPage ()

{
    return(
        <div className="background1">
           <div className="greenscreen1">
               <h1 className="titeltekst1">sign up</h1>
               <h3 className="member1">Member ? <Link to="/login">let's sign in</Link></h3>

               <label htmlFor="email-field">
                   <input
                       type="email"
                       className="signup"
/*                     id="email-field"
                       name="email"*/
                       placeholder="  &#9993; Email"
                   />
               </label>

           </div>



        </div>



    );
}

export default SignUpPage ;