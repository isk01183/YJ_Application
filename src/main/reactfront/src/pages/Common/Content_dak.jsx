import React from 'react';
import '../../css/Common/Content.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Category from './Category.jsx';
import SearchBar from './SearchBar.jsx';
function Content() {
    return (
        <>
        <div className='Content_All'>
            <Category></Category>
            <div className='Content_Main'>
                <SearchBar></SearchBar>
                <div id='Content_Table' className='Content_Table'>

                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                    <div className='Content_List'>
                        <div className='Content_DV'>DV</div>
                        <div className='Content_Title'>Title</div>
                        <div className='Content_Name'>name</div>
                        <div className='Content_Date'>2024.04.14</div>
                    </div>
                </div>
                <div className='Add_List' onClick={Add_List}>더보기</div>
            </div>
        </div>
        </>
    );
}
  
function Add_List() {
    console.log('1');
    var Content_All_Div = document.querySelector('.Content_All');
    var Content_List_Div = document.querySelector('.Content_List');
    // 왼쪽의 메뉴바의 width 정보 가져오기
    var Content_List_Div_height = window.getComputedStyle(Content_All_Div).getPropertyValue('height');
    var count = document.getElementsByClassName('Content_List').length;
    Content_All_Div.style.height = parseInt(Content_List_Div_height.split('px')[0]) + 647.5 + 'px';

    var div = document.getElementById('Content_Table');
    // div 요소의 내용에 새로운 내용을 추가합니다.
    for(var i = 0; 9 > i; i++){
        div.innerHTML += '<div class="Content_List"> <div class="Content_DV">DV</div> <div class="Content_Title">Title</div> <div class="Content_Name">name</div> <div class="Content_Date">2024.04.14</div> </div>';
    }
}

export default Content;