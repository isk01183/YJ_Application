
import React, { useEffect, useState } from 'react'
import '../../../css/Common/user/Register.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { gacha } from '../../../js/Common/Common.js';
// import { gachaSort } from '../../../js/Common/Common.js';
import axiosInstance from '../../../api';
export default function Register() {

const navigate = useNavigate();
const location = useLocation();
const fromPath = location.state?.from || '/login';
// ID
const [reId, setReId] = useState('')
// userNm
const [reUserNm, setReUserNm] = useState('')
// PW
const [rePw, setRePw] = useState('')
// E-mail
const [reEmail, setReEmail] = useState('')
// Tel
const [reTel, setReTel] = useState('')
//Gender
const [reGender, setReGender] = useState('')

// IdChe
const [chId, setChId] = useState('')
// NmChe
const [chNm, setChNm] = useState('')
// PwChe
const [chPw, setChPw] = useState('')
const [chPw2, setChPw2] = useState('')
// E-mailChe
const [chEmail, setChEail] = useState('')
// TelChe
const [chTel, setChTel] = useState('')
//페이지 최초 진입시 useEffect이벤트 제어를 위하여 변수 추가
// const [bool, setBool] = useState(false)

// const gacha_Info = (params) => {
//     return axiosInstance
//       .get(`/api/common/gacha/gachaList`, params)
//       .then((response) => {
//         gachaSort(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// }

const focus_event = React.useCallback((cla) => {
    var che_var = reId;
    var focus_event_label = document.querySelector('.label_Id');

    if ( "Id" === cla ){
        focus_event_label = document.querySelector('.label_Id');
        che_var = reId;
    }else if( "Nm" === cla ){
        focus_event_label = document.querySelector('.label_Nm');
        che_var = reUserNm;
    }else if( "Pw" === cla ){
        focus_event_label = document.querySelector('.label_Pw');
        che_var = rePw;
    }else if( "Email" === cla ){
        focus_event_label = document.querySelector('.label_Email');
        che_var = reEmail;
    }else if( "Tel" === cla ){
        focus_event_label = document.querySelector('.label_Tel');
        che_var = reTel;
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
}, [reId, reUserNm, rePw, reEmail, reTel]);

const val_Check = React.useCallback((cla) => {

    if( "Id" === cla ){
        setChId('');
        if( "" !== reId ){
            const idCheckParams = {
                sgmtId: "FR_GAME",  // 실제 세그먼트 ID
                userId: reId,     // 사용자가 입력한 ID
            };
            axiosInstance.post(`/api/common/user/idCheck`, idCheckParams)
            .then((response) => {
                console.log( response.data );
                if( 1 === response.data ){
                    setChId('이 아이디는 이미 사용중 입니다.');
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    if( "Nm" === cla ){
        setChNm('');
        const hasUpperCase = /[A-Z]/g.test(reUserNm);
        const hasLowerCase = /[a-z]/g.test(reUserNm);

        if( "" !== reUserNm && ( !hasUpperCase && !hasLowerCase ) ){
            setChNm('닉네임은 영문으로 입력해주세요.')
        }
    }

    if( "Pw" === cla ){
        setChPw('');
        setChPw2('');
        const hasSpecialChar = /[!@#$%^&*,.?":|]/g.test(rePw);
        const hasUpperCase = /[A-Z]/g.test(rePw);
        const hasLowerCase = /[a-z]/g.test(rePw);

        if( "" !== rePw && ( !hasSpecialChar || !hasUpperCase || !hasLowerCase ) ){
            setChPw('대문자,소문자,특수문자 1개 이상 입력해주세요.')
            setChPw2('사용 가능한 특수문자 !@#$%^&*,.?":|')
        }
    }

    if( "Email" === cla ){
        setChEail('');
        if( "" !== reEmail && ( !reEmail.includes('@') || !reEmail.includes('.') ) ){
            setChEail('이메일 형식으로 입력해주세요.')
        }else if( "" !== reEmail && ( !reEmail.includes('gmail.com') && !reEmail.includes('naver.com') ) ){
            setChEail('gmail 또는 naver 이메일을 입력해주세요.')
        }
    }

    if( "Tel" === cla ){
        setChTel('');
        if( "" !== reTel && reEmail.includes('-') ){
            setChTel('-을 제외한 숫자만 입력해주세요.')
        }else if( "" !== reTel && reTel.length !== 11 ){
            setChTel('전화번호를 형식을 확인해주세요.')
        }else if( "" !== reTel && reTel.substring(0, 3) !== "010" ){
            setChTel('휴대폰번호 앞 3자리는 010으로 입력해주세요.')
        }
    }
  focus_event(cla);
}, [reId, reUserNm, rePw, reEmail, reTel, focus_event]);

function registerClick(){
    const Params = {
        sgmtId: "FR_GAME"  // 실제 세그먼트 ID
        , userId: reId
        , userNm: reUserNm
        , userPwd: rePw
        , emal: reEmail
        , tel: reTel
        , gde: reGender
    };
    
    if( 0 !== chId.length + chPw.length + chPw2.length + chEmail.length + chTel.length 
        || 0 === reId.length + rePw.length + reEmail.length + reTel.length + reGender.length
    ){
        alert("입력하신 정보를 확인해주세요.")
    }else{
        console.log(Params);
        axiosInstance.post(`/api/common/user/insertUser`, Params)
        .then((response) => {
            // console.log( response.data );
            alert("회원가입이 완료 되었습니다.")
            navigate(fromPath, { state: "", replace: true });
        }).catch((error) => {
            console.log(error);
        });
    }
};

// 페이지 최초 진입시 useEffect이벤트 제어를 위하여 추가 ( 최초 진입 시 실행 )
// 변수가 변경되면 이벤트 실행 ( 페이지 최초 진입시 해당 이벤트 실행 x )
// useEffect(()=>{ 이벤트 }, [변수])
// useEffect(() => { val_Check("Id"); }, [reId]);
useEffect(() => { val_Check("Pw"); }, [rePw, val_Check]);
useEffect(() => { val_Check("Email"); }, [reEmail, val_Check]);
useEffect(() => {val_Check("Tel"); }, [reTel, val_Check]);

    return (
        <div className="Register_Main">
            <div className='body'>
            <hgroup>
            <h1>Versatile Chronicle</h1>
            </hgroup>

            <form>
            <div className="group">
                <input type="text" value={reId} onBlur={() => {val_Check("Id")}} onChange={(e) => { setReId(e.target.value) }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="label_Id">ID</label>
            </div>

            <div className="group">
                <input type="text" value={reUserNm} onBlur={() => {val_Check("Nm")}} onChange={(e) => { setReUserNm(e.target.value) }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="label_Nm">Name</label>
            </div>

            <div className="group">
                <input type="Password" value={rePw} onChange={(e) => { setRePw(e.target.value) }}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="label_Pw">Password</label>
            </div>

            <div className="account_Check">
                <div className="id_Check">{chId}</div>
                <div className="id_Check">{chNm}</div>
                <div className="pw_Check">{chPw}</div>
                <div className="pw_Check2">{chPw2}</div>
            </div>

            <div className="group">
                <div className='gender_div'>
                    Gender
                    <select className='gender_sel' value = {reGender}  onChange={e => setReGender(e.target.value)} >
                        <option value="" >Select</option>
                        <option value="M">Man</option>
                        <option value="W">Woman</option>
                    </select>
                </div>

            </div>

            <div className="group">
               <input type="text" value={reEmail} onChange={(e) => { setReEmail(e.target.value) }} />
                <label className="label_Email">E-mail</label>
            </div>

            <div className="group">
            <input type="text" value={reTel} onChange={(e) => { setReTel(e.target.value) }} />
                <label className="label_Tel">Tel</label>
            </div>

            <div className="account_Check">
                <div className="Email_Check">{chEmail}</div>
                <div className="Tel_Check">{chTel}</div>
            </div>

            <button type="button" className="button buttonBlue" onClick={() => registerClick()} >가입
                <div className="ripples buttonRipples">
                    <span className="ripplesCircle"></span>
                </div>
            </button>
            <Link  className="button buttonBlue" to='/login'>취소</Link>
            </form>

            </div>
        </div>
    )
}


// function pw_Check(num) {
//     console.log("che:::::::::::::", num);
//     var register_Pw_Div = document.querySelector('.register_Pw');
//     var pw_Check_Div = document.querySelector('.pw_Check');

//     focus_event("Pw");

//     if( "1" == register_Pw_Div.value ){
//         pw_Check_Div.textContent = '111111111111111';
//     }else if( "2" == register_Pw_Div.value ){
//         pw_Check_Div.textContent = '';
//     }else{
//         pw_Check_Div.textContent = '3333333333333';
//     }
// }

