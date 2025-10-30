import React, { useState } from 'react' 
import '../../../css/Common/user/Login.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axiosInstance from '../../../api';
export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();
    const fromPath = location.state?.from || '/householdLedger';

    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');

    function bt_login(e) {
        // 서버 통신 후 받아온 값 예시
        const logInParams = {
            sgmtId: "FR_GAME",  // 실제 세그먼트 ID
            userId: userId,     // 사용자가 입력한 ID
            userPwd: userPwd    // 사용자가 입력한 PW
        };

        logIn_Ck(logInParams);
    }

const logIn_Ck = (logInParams) => {
    return axiosInstance
        // 1. GET을 POST로 변경
        // 2. 로그인 전용 URL(예: /loginCheck)로 변경하는 것을 권장
        .post(`/api/common/user/loginCheck`, logInParams) // 3. 데이터를 바로 전달
        .then((response) => {
            // 4. 로그인 성공 후의 로직 (예: 메인 페이지로 이동)
            //  console.log(response.data);

             // 서버가 반환한 유저 정보
             const dataToSend = {
                nickname: response.data.userNm,
                id: response.data.userId 
            };
            // 5. 메인 페이지(fromPath)로 유저 정보를 state에 담아 이동
            navigate(fromPath, { state: dataToSend, replace: true });
        })
        .catch((error) => {
            alert("ID / PW를 확인해주세요.");
             console.log(error);
        });
}

const val_Check = React.useCallback((cla) => {
    var che_var = userId;
    var focus_event_label = document.querySelector('.label_Id');

    if ( "Id" === cla ){
        focus_event_label = document.querySelector('.label_Id');
        che_var = userId;
    }else if( "Pw" === cla ){
        focus_event_label = document.querySelector('.label_Pw');
        che_var = userPwd;
    }

    if( null == che_var || "" === che_var ){
        focus_event_label.style.top = '';
        focus_event_label.style.transform = '';
        focus_event_label.style.left ='';
    }else{
        focus_event_label.style.top = '-47%';
        focus_event_label.style.transform = 'scale(.75)';
        focus_event_label.style.left ='-2px';
        focus_event_label.style.font = '18px';
    }
}, [userId, userPwd]);

    return (
        <div className="Login_main">
            <div className='body'>
                <hgroup>
                    <h1>Versatile Chronicle</h1>
                </hgroup>
            
            

                <form>
                    <div className="group">
                        <input type="text" onBlur={() => {val_Check("Id")}} value={userId} onChange={(e) => setUserId(e.target.value)} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="label_Id">ID</label>
                    </div>
                    <div className="group">
                        <input type="Password" onBlur={() => {val_Check("Pw")}} value={userPwd} onChange={(e) => setUserPwd(e.target.value)} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="label_Pw">Password</label>
                    </div>
                    
                    {/* 로그인 버튼 */}
                    <button type="button" className="button buttonBlue" onClick={bt_login}>로그인
                        <div className="ripples buttonRipples">
                            <span className="ripplesCircle"></span>
                        </div>
                    </button>
                    
                    {/* 회원 등록 버튼 */}
                    <Link  className="button buttonBlue" to='/register'>회원가입
                        {/* <div className="ripples buttonRipples">
                            <span className="ripplesCircle"></span> */}
                        {/* </div> */}
                    </Link>
                </form>

                {/* 하단에 이미지 부분 */}
                <footer><Link to='/'></Link>
                <p>You Papago <Link to='/'>Go</Link></p>
                </footer>
            </div>
        </div>
    )
}
