import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Application() {
    return (
        <>
        <div className='Application'>
            <Link to="/fad">
            <button>FoodRoad</button>
            </Link>
        </div>

        <div className='Application'>
            <Link to="/inquiryWrite">
            <button>Inquiry</button>
            </Link>
        </div>
        <div className='Application'>
            <Link to="/user">
            <button>Register</button>
            </Link>
        </div>

        <div className='Application'>
            <Link to="/user">
            <button>Login</button>
            </Link>
        </div>
        <div className='Application'>
            <Link to="/user">
            <button>Information</button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Hidden_Application'>
            <Link to="/">
            <button></button>
            </Link>
        </div>
        <div className='Application'>
            <Link to="/user">
            <button>Program</button>
            </Link>
        </div>
        <div className='Application'>
            <Link to="/user">
            <button>Guide</button>
            </Link>
        </div>
        <div className='Application'>
            <Link to="/user">
            <button>Admin</button>
            </Link>
        </div>
        </>
    );
  }
  
  export default Application;