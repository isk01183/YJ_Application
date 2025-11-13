import '../../css/household_ledger/Main.css';
import Menu from '../Common/Menu.jsx';
import Bottom from '../Common/Bottom.jsx';
import Category from '../Common/Category.jsx';
import Calendar from './Calendar.jsx';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { idChange } from '../../js/household_ledger/Main.js';
export default function Main() {

    const [userInfo, setUserInfo] = useState({ nickname: '로그인을 해주세요', id: '' });

    /* 이전 화면[로그인]에서 넘겨받은 값 세팅 S */
    const location = useLocation();

    useEffect(() => {
        // state에 보낸 데이터가 있는지 확인
        if (location.state) {
            // 받아온 데이터로 userInfo 상태를 업데이트
            setUserInfo(location.state);
            idChange(location.state);
        }
    // 'setUserInfo' 함수도 의존성 배열에 추가해주는 것이 좋음
    }, [location.state, setUserInfo]);
    /* 이전 화면[로그인]에서 넘겨받은 값 세팅 E */

    return (
    <>
    <Menu userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className='Content_All'>
            <Category />
            <Calendar />
        </div>
    <Bottom />
    </> 
    )
}