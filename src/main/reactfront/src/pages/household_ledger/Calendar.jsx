import '../../css/household_ledger/Main.css';
import React, { useState} from 'react';

import { year_set } from '../../js/household_ledger/Calendar.js';
import { month_set } from '../../js/household_ledger/Calendar.js';
import { week_set } from '../../js/household_ledger/Calendar.js';
import { previous_month_date } from '../../js/household_ledger/Calendar.js';
import { calendar_day_set } from '../../js/household_ledger/Calendar.js';
import { next_month_date } from '../../js/household_ledger/Calendar.js';
import { dayImportExpenditure } from '../../js/household_ledger/Calendar.js';
import { login_ck } from '../../js/household_ledger/Main.js';
export default function Main() {
    /* 현재의 YYYY MM 가져옴 */
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate()< 10 ? '0' + new Date().getDate() : new Date().getDate().toString();

    /* 가져온 YYYY와 MM을 입력 */
    const [year, setYear] = useState(currentYear.toString());
    const [month, setMonth] = useState(currentMonth.toString().padStart(2, "0"));
    const [dayDetailHeader, setDayDetailHeader] = useState( `${currentYear}.${currentMonth}.${currentDay}` );

    const CalendarYear_dates = year_set( currentYear );     /* 달력 년도 세팅 현재 년도에서 -5 ~ +2 년도 표기*/
    const CalendarMonth_dates = month_set();                /* 달력 월 세팅 */
    const CalendarWeek_dates = week_set();                  /* 달력 요일 세팅 */

    let calendar_previous_day_dates = previous_month_date( year,month ); /* 이전 달 일자 세팅 */
    let calendar_day_dates = calendar_day_set( year,month) ;            /* 선택된 달 일자 세팅 */
    let calendar_next_day_dates = next_month_date( year,month );        /* 다음 달 일자 세팅 */

    /* 선택된 일자 데이터 상세 - 초기에는 현재일자 */
    let dayDetail = dayImportExpenditure(dayDetailHeader.replace(/\./g, ""));
    
    /* 활성된 YYYY.MM 날짜 클릭이벤트 */
    function calendarDaysClick(date){

        if( "1" === login_ck() ){
            alert("로그인을 해주세요.");
        }else{
            setDayDetailHeader( `${date.id.slice(0,4)}.${date.id.slice(4,6)}.${date.id.slice(6,8)}` );
            dayDetail = dayImportExpenditure(dayDetailHeader.replace(/\./g, ""));
        }

    }

    return (
    <>
        <div className='Content_Main'>
            <div className="App">
                <div className='Household_Ledger_Main'>
                    <div className='Calendar_Home_Header'>
                        <div className='Calendar_Home_title'>Calendar</div>
                            {/* 달력에 년도 세팅 */}
                            <select className='sel_year' value = {year}  onChange={e => setYear(e.target.value)} >
                                {CalendarYear_dates.map(date => (
                                    <option key={date.CalendarYear} value= {date.CalendarYear}>{date.CalendarYear}</option>
                                ))}
                            </select>
                            {/* 달력에 월 세팅 */}
                            <select className='sel_month' value = {month} onChange={e => setMonth(e.target.value)}>
                                {CalendarMonth_dates.map(date => (
                                    <option key={date.CalendarMonth} value= {date.CalendarMonth}>{date.CalendarMonth}</option>
                                ))}
                            </select>
                        </div>
                    <div id='Calendar_Home_Content' className='Calendar_Home_Content'>
                        {/* 달력에 요일 세팅 */}
                        {CalendarWeek_dates.map(date => (
                            <div key={date.calendar_week} className='week'> {date.calendar_week} </div>
                        ))}

                        {/* 달력 이전 달 일자 세팅 */}
                        {calendar_previous_day_dates.map(date => (
                            <div key={date.previous_day}className='Hidden_Calendar_Application'>
                                <div className='calendar_days'>
                                    <div className='calendar_days_header'> {date.previous_day} </div>
                                </div>
                            </div>
                        ))}

                        {/* 달력 선택된 달 일자 세팅 */}
                        {calendar_day_dates.map(date => (
                            <div key={date.id} className='Calendar_Application'>
                                <div id = {date.id} className='calendar_days' onClick={() => calendarDaysClick(date)}>
                                    <div className={date.calendar_weeks}> {date.calendar_days} </div>
                                    {/* [ date.day_income && ] - date.day_income 데이터가 없으면 해당 div안나옴 */}
                                    {date.day_income && <div className='day_income'> ＋{date.day_income} </div>}
                                    {date.day_spending && <div className='day_spending'> ＋{date.day_spending} </div>}
                                </div>
                            </div>
                        ))}

                        {/* 달력 다음달 일자 세팅 */}
                        {calendar_next_day_dates.map(date => (
                            <div key={date.next_day} className='Hidden_Calendar_Application'>
                                <div className='calendar_days'>
                                    <div className='calendar_days_header'> {date.next_day} </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='dayDetail'>
            <div id='dayDetail_header' className='dayDetail_header'>{dayDetailHeader}</div>
                <div className= 'dayDetail_content'>
                    {dayDetail.map(date => (
                        <div key={date.title} className='dayDetail_con_dt'>
                            <div className='dayDetail_con_dt_hd'>{date.title}</div>
                            <div>{date.ImportExpenditure}</div>
                        </div>
                        
                    ))}
                </div>
            </div>      
        </div>
    </> 
    )
}