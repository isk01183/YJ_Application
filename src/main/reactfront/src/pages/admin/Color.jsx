// import React from "react";
import React, { useState } from 'react';
import '../../css/admin/Color.css';
// import { getValue } from '../../js/admin/Color.js';
// import { rgbToHex } from '../../js/admin/Color.js';
// import { rgbColor } from '../../js/admin/Color.js';

export default function Color() {

    const [colors, setColors] = useState([]);
    // const [backgroundColor, setBackgroundColor] = useState('white');
    const [rgb_R, setRgb_R] = useState(255);
    const [rgb_G, setRgb_G] = useState(255);
    const [rgb_B, setRgb_B] = useState(255);
    const [rgb_A, setRgb_A] = useState(1);
    
    const getValue = (inputElement,rbga) => {
        //inputElement 값은 this / input의 value값 설정 
        const value = inputElement.value;

        if( rbga === "R" ){ setRgb_R(value) };
        if( rbga === "G" ){ setRgb_G(value) };
        if( rbga === "B" ){ setRgb_B(value) };
        if( rbga === "A" ){ setRgb_A(value) };

        // closest를 사용하여 가장 가까운 'range-slider' 클래스를 가진 부모 요소를 찾기
        const rangeSlider = inputElement.closest('.range-slider');
        // 'range-slider__value' 클래스를 가진 자식 요소를 찾기
        const valueDisplay = rangeSlider.querySelector('.range-slider__value');
        // range-slider__value 클래스의 text 값 입력
        valueDisplay.textContent = value;
        // 해당 클래스의 스타일 변경 - 백그라운드-컬러
        document.querySelector(".color_box").style.backgroundColor = rgbColor( "options" );
    }

    const colorSaveBtn_ck = () => {
        // const newColor = 'save' + (colors.length + 1);
        const newColor = rgbColor( 'save' );
        // setColors([...colors, newColor, bkColor]);
        // const newColor = '#' + Math.floor(Math.random()*16777215).toString(16); // 새로운 랜덤 색상을 생성합니다.
        setColors([...colors, {id: colors.length, color: newColor}]);

        // var bkColor = document.getElementById(newColor);
        // bkColor.style.backgroundColor = rgbColor( 'save' );
    };

    // // 버튼에 클릭 이벤트 리스너를 추가.
    // const colorSaveBtn_ck = () => {
    //     // 클릭 이벤트가 발생했을 때 실행될 코드를 여기에 작성.
    //     const save_color = document.getElementsByClassName('save_color');
    //     // 새로운 div 요소를 생성.
    //     let newDiv = document.createElement('div');
    //     // 새로운 div에 고유한 id를 추가. 
    //     newDiv.setAttribute('id', 'save'+(save_color.length+1));
    //     // 새로운 div에 "save_color" 클래스를 추가.
    //     newDiv.classNameList.add('save_color');
    //     // id가 "colorPalette"인 요소를 가져옴.
    //     // var colorPalette = document.getElementById("colorPalette");
    //     let colorPalette = document.getElementById('save_colors');
    //     // id가 "colorPalette"인 요소에 새로운 div를 추가. 
    //     colorPalette.appendChild(newDiv);
        
    //     const saveColorId = document.getElementById('save'+save_color.length);
    //     saveColorId.style.backgroundColor = rgbColor( 'save' );
        
    //     // 새로 추가된 div에 클릭 이벤트 리스너를 추가합니다.
    //     newDiv.addEventListener('click', function() {
    //         // 클릭된 div의 배경색을 가져옵니다.
    //         let backgroundColor = window.getComputedStyle(newDiv).backgroundColor;
    //         // RGB 값을 추출합니다.
    //         let rgbArray = backgroundColor.match(/\((.*?)\)/)[1].split(",");
    //         if( null === rgbArray[3] ){
    //             rgbArray[3] = "1"; 
    //         }else{
    //             rgbArray[3] = rgbArray[3].replace(/[(){}[\]]/g, '');
    //         }
    //         // 메인 백그라운드 색상을 변경
    //         document.querySelector('.color_box').style.backgroundColor =  backgroundColor;
    //         // 16진수 표기 변경
    //         rgbToHex( rgbArray[0], rgbArray[1], rgbArray[2] );
            
    //         const rslider_range = document.getElementsByclassName('range-slider__range');
    //         const slider_value = document.getElementsByclassName('range-slider__value');
            
    //         for( let i = 0; i < rslider_range.length; i++ ){
    //             rslider_range[i].value = rgbArray[i].trim()
    //             slider_value[i].textContent = rgbArray[i].trim()
    //         }

    //     });
    // };
    
    
    // R,G,B 값을 넘기면 16진수로 변경
    const rgbToHex = (r, g, b) => {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        // RGB 값을 캔버스의 fillStyle로 설정.
        ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
        // fillStyle 속성에서 HEX 색상 코드를 추출. / toUpperCase() 소문자를 대문자로 변환
        const color_hex = document.getElementsByClassName('color_hex');
        color_hex[0].textContent = ctx.fillStyle;
    }
    
    // 호츌시 R, G, B, A 옵션값을 가져와서 백그라운드RGB 문자 리턴
    const rgbColor = ( CD ) => {
        // 'range-slider__range' 클래스를 가진 모든 요소를 선택
        const sliders = document.getElementsByClassName('range-slider__range');
        // 값을 저장할 배열을 생성
        let values = [];
        // 선택된 모든 슬라이더 요소에 대해 반복하여 값을 배열에 추가
        for (let slider of sliders) {
            values.push(slider.value);
        }
        const rgbColor = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ',' + values[3] + ')'; 
        // 옵션 변경시 16진수로 변경하여 헥사값 세팅
        if( CD === "options" ){
            rgbToHex(values[0],values[1],values[2]);
        }
        return rgbColor
    }
      
    // const saveBtn = document.getElementById('colorSaveBtn');
        
    // saveBtn.addEventListener('click', function() {
    //     saveBtn.style.animation = 'clickAnimation 2s'; // 클릭시 애니메이션 적용
    //     setTimeout(() => {
    //         saveBtn.style.animation = 'none'; // 애니메이션이 종료되면 초기화
    //     }, 2000); // 애니메이션 지속 시간
    // });

    return (
   <div className='main'>
      <div className='color'>
        <div className='color_box'> 
        </div>
        <div className='color_hex'>#ffffff</div>
      </div>
      <div className='color_options'>
        <div className="range-slider">
          <span className="rgb_set">R</span>
          <input className="range-slider__range" type="range" value={rgb_R} min="0" max="255" onChange={(e) => { getValue(e.target,"R") }}    />
          <span className="range-slider__value">255</span>
        </div>

        <div className="range-slider">
          <span className="rgb_set">G</span>
          <input className="range-slider__range" type="range" value={rgb_G} min="0" max="255" onChange={(e) => { getValue(e.target,"G") }}/>
          <span className="range-slider__value">255</span> 
        </div>

        <div className="range-slider">
          <span className="rgb_set">B</span>
          <input className="range-slider__range" type="range" value={rgb_B} min="0" max="255" onChange={(e) => { getValue(e.target,"B") }}/>
          <span className="range-slider__value">255</span>
        </div> 

        <div className="range-slider">
          <span className="rgb_set">A</span>
          <input className="range-slider__range" type="range" value={rgb_A} min="0" max="1" step="0.1" onChange={(e) => { getValue(e.target,"A") }}/>
          <span className="range-slider__value">1</span>
        </div>
        
        <input type="button" id="colorSaveBtn" value="SAVE" onClick={colorSaveBtn_ck}/>
      </div>
      
      <div className='asdf'>
      </div>
      
      <div id='colorPalette' className='color_palette'>
        <div id='save_colors' className='save_colors'>
        {colors.map((colorObj, index) => (
            <div key={index} id={`color_${colorObj.id}`} style={{backgroundColor: colorObj.color}} className="save_color">
            {/* color content */}
            </div>
        ))}
        </div>
      </div>
    </div>
    )
}