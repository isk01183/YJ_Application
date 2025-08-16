// import React, { useState } from 'react'
import '../../css/household_ledger/Main.css';
import Menu from '../Common/Menu.jsx';
import Bottom from '../Common/Bottom.jsx';
import Category from '../Common/Category.jsx';
export default function Main() {
    // 리스트ID
    // const [listId, setListId] = useState(''); 

    // function Add_List() {
    //     console.log('1');
    //     // var Content_All_Div = document.querySelector('.Content_All');
    //     // var Content_List_Div = document.querySelector('.Content_List');
    //     // 왼쪽의 메뉴바의 width 정보 가져오기
    //     // var Content_List_Div_height = window.getComputedStyle(Content_All_Div).getPropertyValue('height');
    //     // var count = document.getElementsByClassName('Content_List').length;
    //     // Content_All_Div.style.height = parseInt(Content_List_Div_height.split('px')[0]) + 647.5 + 'px';
    
    //     var div = document.getElementById('Content_Table');
    //     // div 요소의 내용에 새로운 내용을 추가합니다.
    //     for(var i = 0; 9 > i; i++){
    //         div.innerHTML += '<div class="Content_List"> <div class="Content_DV">DV</div> <div class="Content_Title">Title</div> <div class="Content_Name">name</div> <div class="Content_Date">2024.04.14</div> </div>';
    //     }
    // }

    return (
    <>
    <Menu />
        <div className='Content_All'>
        <Category />
            <div className='Content_Main'>
                
            <div className="App">
                    <div className='Household_Ledger_Main'>
                        <div className='Home_Header'>
                            <div className='home_title'>Calendar</div>
                                <select className='sel_year'>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                </select>
                                <select className='sel_month'>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        <div id='Home_Content' className='Home_Content'>
                            <div className='Application'>
                            <div className='calendar_days'>
                            <div className='calendar_days_header'>10</div>
                            <div className='day_income'>1</div>
                            <div className='day_spending'>1</div>
                            </div>
                            </div>

                            <div className='Hidden_Application'>
                            <div className='calendar_days'>
                            <div className='calendar_days_header'>1</div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='abc'>
                    <div className='abc_header'>YYYY.MM.DD</div>
                    <div className= 'abc_content'>
                        <div className='abc_con_dt'>
                            <div className='abc_con_dt_hd'></div>
                        </div>
                        <div className='abc_con_dt'>
                            <div className='abc_con_dt_hd'></div>
                        </div>
                    </div>
                </div>      
                
            </div>
        </div>
    <Bottom />
    </> 
    )
}