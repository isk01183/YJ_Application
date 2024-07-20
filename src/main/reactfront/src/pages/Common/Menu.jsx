import React, { useEffect } from 'react';
import '../../css/Common/Menu.css';
import '../../css/Common/Common.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Menu() {
    return (
        <>
            <div className='Menu_Main'>
                <div className='logo'>
                    <a href='/'></a>
                </div>
                <div className='Menu_Content'>
                    <div className='Menu_Info'>
                        <div className='Info_Content'>
                            <Link to='/login'>Login</Link>
                        </div>
                        <div className='Info_Content'>
                            xxxx
                        </div>
                        <div className='Info_Content'>
                            <a href='/'>Information</a>
                        </div>
                    </div>
                    <div className='Menu_Title'>
                        <a href='/fad'>Food And Drink</a>
                    </div>
                    <div className='Menu_Title'>
                        <a href='/'>Attraction</a>
                    </div>
                </div>

            </div>
        </>
    );
}