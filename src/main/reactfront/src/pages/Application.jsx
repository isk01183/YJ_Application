import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Application() {
    return (
        <>
        <div className='Application'>
            <Link to="/household_ledger">
            <button>
                Household
                Ledger
            </button>
            </Link>
        </div>

        <div className='Application'>
            <Link to="/admin">
            <button>Admin</button>
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
        </>
    );
  }
  
  export default Application;