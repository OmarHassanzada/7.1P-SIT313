import React, { useState } from 'react';
import './Registration.css';

import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useNavigate} from 'react-router-dom';

const Registration = (props) => 
{

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const [contact, setContact] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {displayName, email, password, confirmPassword} = contact;

    console.log(contact);



    const handleChange = (event) => {
        const {name, value} = event.target;
        setContact((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    
    const handleRegistration = async (event) => {
        event.preventDefault();
        if (contact.password !== contact.confirmPassword) {
            setErrorMessage('Passwords do not Match!!');
        } else {
            setErrorMessage('');
            try {
                console.log('Creating user:', contact.email);
                const usernamePassword = await firebase.auth().createUserWithEmailAndPassword(contact.email, contact.password);
                console.log('User created:', (await usernamePassword).user.email);
                //then we navigate to login for user to login
                navigate('/Login');
            } catch (error) {
                console.error('Error creating user:', error);
            }
        }
    };


    return <div> 
        <div className="signup-container">
        <h1>Sign Up</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form>
            <input
                name="displayName"
                type="text"
                placeholder="Name"
                value={contact.displayName}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                value={contact.password}
                onChange={handleChange}
            />
            <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={contact.confirmPassword}
                onChange={handleChange}
            />
            <signupbutton onClick={handleRegistration}>Sign Up</signupbutton>
        </form>

        </div>

        
    </div>
}

export default Registration