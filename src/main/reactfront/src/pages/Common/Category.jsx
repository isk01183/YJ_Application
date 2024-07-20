import React from 'react';
import '../../css/Common/Category.css';
// import '../../js/Common/Category.js';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Category() {
    return (
        <>
            <div className='Category_Main'>
                <div className='Category_Box'>
                    <div className='Category_Test'>ALL</div>
                    <div className='Category_Test'>Test</div>
                    <div className='Category_Test'>Test</div>
                </div>

            </div>
            <div className='Category_bnt' onClick={Category_on_off}>◀</div>
        </>
    );
}

function Category_on_off() {
    var Category_Main_Div = document.querySelector('.Category_Main');
    var Category_bnt_Div = document.querySelector('.Category_bnt');
    var Content_Main_Div = document.querySelector('.Content_Main');
    // 왼쪽의 메뉴바의 width 정보 가져오기
    var Category_Main_Div_Width = window.getComputedStyle(Category_Main_Div).getPropertyValue('width');
    // 0px 일경우 펼치기
    if (Category_Main_Div_Width == '0px') {
        Category_Main_Div.style.width = '17%';
        Category_Main_Div.style.border = '1px solid #C7EEB1'
        Content_Main_Div.style.width = '80%';
        // 왼쪽 메뉴바를 펼치고 text를 변경하기 위한 Timeout 0.9초 설정
        setTimeout(function() {
            Category_bnt_Div.textContent = '◀';
          }, 900);
    // 0px 일경우 숨기기
    } else{
        Category_Main_Div.style.width = '0%';
        Category_Main_Div.style.border = '0px solid #C7EEB1'
        Content_Main_Div.style.width = '98%';
        // 왼쪽 메뉴바를 숨기고 text를 변경하기 위한 Timeout 0.9초 설정
        setTimeout(function() {
            Category_bnt_Div.textContent = '▶';
          }, 900);
    
    }
}



export default Category;