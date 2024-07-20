import React from 'react'
import '../../../css/Common/user/Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className="Login_main">
            <body>
            <hgroup>
            <h1>Versatile Chronicle</h1>
            </hgroup>

            <form>
            <div className="group">
                <input type="text"/><span className="highlight"></span><span className="bar"></span>
                <label>ID</label>
            </div>
            <div className="group">
                <input type="Password"/><span className="highlight"></span><span className="bar"></span>
                <label>Password</label>
            </div>
            
            {/* 로그인 버튼 */}
            <button type="button" className="button buttonBlue">로그인
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
            <footer><Link to='/'><img src="https://www.polymer-project.org/images/logos/p-logo.svg"/></Link>
            <p>You Papago <Link to='/'>Go</Link></p>
            </footer>
            </body>
        </div>
    )
}
