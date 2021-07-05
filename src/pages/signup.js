import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

function SignUpPage ()

{
    return(
        <div className="App">
            <header className="App-header">
                <a className="App-link"
                >
                    SignUp

                </a>

                <p><Link to="/Login">Login</Link></p>

            </header>



        </div>



    );
}

export default SignUpPage ;