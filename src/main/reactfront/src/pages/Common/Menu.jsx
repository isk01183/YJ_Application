// import React, { useState } from 'react';
import '../../css/Common/Menu.css';
import '../../css/Common/Common.css';
// import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import { idChange } from '../../js/household_ledger/Main.js';
export default function Menu({ userInfo, setUserInfo }) {

    const location = useLocation();
    
    function handleLogoutSuccess() {
        idChange("");
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
                        {/* ===== 수정된 조건부 렌더링 블록 ===== */}
                        {userInfo.id ? (
                            // [로그인 된 상태] userInfo.id에 값이 있을 때 (truthy)
                            <div className='Info_Content' onClick={() => handleLogoutSuccess()}>
                                Logout
                            </div>
                        ) : (
                            // [로그아웃 된 상태] userInfo.id가 null 또는 "" 일 때 (falsy)
                            <div className='Info_Content'>
                                <Link to='/login' state={{ from: location.pathname }}>Login</Link>
                            </div>
                        )}
                        {/* ================================== */}
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