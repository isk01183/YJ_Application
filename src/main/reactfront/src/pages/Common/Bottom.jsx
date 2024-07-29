import React from 'react';
import '../../css/Common/Bottom.css';

function Bottom() {
    return (
        <>
            <div id="botton">
                <ul className="sns_list">
                    <li><a href="http://www.instagram.com" target="_blank"><span className="ico instagram"></span></a></li>
                    <li><a href="http://twitter.com" target="_blank"><span className="ico twitter"></span></a></li>
                    {/* <li><a href="http://www.weibo.com" target="_blank"><span className="ico weibo"></span></a></li> */}
                    <li><a href="http://www.facebook.com" target="_blank"><span className="ico facebook"></span></a></li>
                    <li><a href="http://www.youtube.com" target="_blank"><span className="ico youtube"></span></a></li>
                    <li><p>왼쪽 표시를 눌러 sns로 이동합니다 / Press the left mark to go to sns</p></li>
                </ul>
                
                <div id = "footer">
                    <div id="nav_menu">
                        <ul>
                            <li><a href="/">CUSTOMER CENTER</a></li>
                            <li><a href="/">ABCDE</a><span className="ico_recruit"> 개발중</span></li>
                            <li><a href="/" target="_blank">ABCDE</a><span className="ico_recruit"> 개발중</span></li>
                            <li><a href="/">ABCDE</a></li>
                        </ul>
                    </div>
                    <p> 열심히 만들고 있어요 / I'm working hard to make it. </p>
                </div>
            </div>
        </>
    );
}
  
export default Bottom;