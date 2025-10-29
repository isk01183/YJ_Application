// import React, { useState } from 'react';
import '../../css/Common/Menu.css';
import '../../css/Common/Common.css';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Menu({ userInfo, setUserInfo }) {

    function handleLoginSuccess() {
        // 서버 통신 후 받아온 값 예시
        setUserInfo({ nickname: "홍길동", id: "user123" });
    }

    function handleLogoutSuccess() {
        // 서버 통신 후 받아온 값 예시
        setUserInfo({ nickname: "로그인을 해주세요", id: "" });
    }

    return (
        <>
            <div className='Menu_Main'>
                <div className='logo'>
                    {/* <a href='/'></a> */}
                </div>
                <div className='Menu_Content'>
                    <div className='Menu_Info'>
                        <div className='Info_Content' onClick={() => handleLoginSuccess()}>
                            {/* <Link to='/login'>Login</Link> */}
                            Login
                        </div>
                        <div className='Info_Content' onClick={() => handleLogoutSuccess()}>
                            {/* <Link to='/login'>Login</Link> */}
                            Logout
                        </div>
                        <div className='Info_Content'>
                            {userInfo.nickname}
                        </div>
                        <div hidden id='userId'>{userInfo.id}</div>
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