import React, { useState } from 'react'
import '../../../css/Common/Content.css';
import Menu from '../../Common/Menu.jsx';
import Bottom from '../../Common/Bottom.jsx';
import Category from '../../Common/Category.jsx';
import FadDetail from './FadDetail.jsx';
import SearchBar from '../../Common/SearchBar.jsx';
export default function FadList() {
    // 리스트ID
    // const [listId, setListId] = useState(''); 
    // 상세페이지 boolean
    const [detail, setDetail] = useState(false); 
    // 상세페이지열기
    const detailTrue = () => {
        setDetail(true)
    }
    const detailFalse = () => {
        setDetail(false)
    }


    function Add_List() {
        console.log('1');
        // var Content_All_Div = document.querySelector('.Content_All');
        // var Content_List_Div = document.querySelector('.Content_List');
        // 왼쪽의 메뉴바의 width 정보 가져오기
        // var Content_List_Div_height = window.getComputedStyle(Content_All_Div).getPropertyValue('height');
        // var count = document.getElementsByClassName('Content_List').length;
        // Content_All_Div.style.height = parseInt(Content_List_Div_height.split('px')[0]) + 647.5 + 'px';
    
        var div = document.getElementById('Content_Table');
        // div 요소의 내용에 새로운 내용을 추가합니다.
        for(var i = 0; 9 > i; i++){
            div.innerHTML += '<div class="Content_List"> <div class="Content_DV">DV</div> <div class="Content_Title">Title</div> <div class="Content_Name">name</div> <div class="Content_Date">2024.04.14</div> </div>';
        }
    }

    return (
        <>
        {detail === true ? <FadDetail detailFalse={detailFalse} /> : (
            <>
            <Menu />
                <div className='Content_All'>
                <Category />
                <div className='Content_Main'>
                    {/* <button onClick={() => detailTrue()}>상세</button> */}
                    <SearchBar />
                    <div id='Content_Table' className='Content_Table'>

                        <div className='Content_List' onClick={() => detailTrue()}>
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
            <Bottom />
            </>
            )
        }
        </> 
    )
}