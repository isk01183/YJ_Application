import '../../css/household_ledger/Main.css';
import Menu from '../Common/Menu.jsx';
import Bottom from '../Common/Bottom.jsx';
import Category from '../Common/Category.jsx';
import React, { useState} from 'react';
export default function Main() {

    const [userInfo, setUserInfo] = useState({ nickname: '로그인을 해주세요', id: '' });

    /* 현재의 YYYY MM 가져옴 */
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate()< 10 ? '0' + new Date().getDate() : new Date().getDate().toString();

    /* 가져온 YYYY와 MM을 입력 */
    const [year, setYear] = useState(currentYear.toString());
    const [month, setMonth] = useState(currentMonth.toString().padStart(2, "0"));
    const [dayDetailHeader, setDayDetailHeader] = useState( `${currentYear}.${currentMonth}.${currentDay}` );

    const CalendarYear_dates = year_set();                  /* 달력 년도 세팅 현재 년도에서 -5 ~ +2 년도 표기*/
    const CalendarMonth_dates = month_set();                /* 달력 월 세팅 */
    const CalendarWeek_dates = week_set();                  /* 달력 요일 세팅 */

    let calendar_previous_day_dates =previous_month_date(); /* 이전 달 일자 세팅 */
    let calendar_day_dates = calendar_day_set();            /* 선택된 달 일자 세팅 */
    let calendar_next_day_dates = next_month_date();        /* 다음 달 일자 세팅 */

    /* 선택된 일자 데이터 상세 - 초기에는 현재일자 */
    let dayDetail = dayImportExpenditure(dayDetailHeader.replace(/\./g, ""));

    /* 달력 년도 옵션 세팅 */
    function year_set(){
        let sel_setYear = [];
        for(let i = currentYear-5; i <= currentYear+2; i++){
            sel_setYear.push({ CalendarYear: i.toString() });
        }
        return sel_setYear;
    }

    /* 달력 월 옵션 세팅 */
    function month_set(){
        let sel_setMonth = [];
        for(let i = 1; i <= 12; i++){
            let month_i =  (i) < 10 ? '0' + (i) : (i).toString() ;
            sel_setMonth.push({ CalendarMonth: month_i });
        }
        return sel_setMonth;
    }
    
    /* 달력 요일 세팅 */
    function week_set(){
        let calendar_week = [];
        const day = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
        for(var i = 0; i <= 6; i++){
            calendar_week.push({ calendar_week: day[i] });
        }
        return calendar_week
    }

    /* 달력 일자 세팅 */
    function calendar_day_set(){
        const num = date_set(year,month)[2];
        let calendar_day = [];

        let holiday_date = holiday();           /* 공휴일 데이터 가져오기 */
        let day_content_date = dayContent();    /* 수입,지출 데이터 가져오기 */

        for ( let i = 0; i < num; i++ ){
            let calendar_setWeek = '';
            /* 공휴일 세팅 */
            let holiday_yn = 'N';   /* 공휴일 여부 */
            for( let z = 0; z < holiday_date.length; z++){
                if( holiday_date[z].year === year && holiday_date[z].month === month && holiday_date[z].day === ((i+1) < 10 ? '0' + (i+1) : (i+1).toString()) ){
                    holiday_yn = 'Y';
                    calendar_setWeek = 'calendar_days_header_holiday';
                }
            }
            /* 일자에 요일 세팅 6:일요일 / 0:토요일 */
            if('N' === holiday_yn){
                calendar_setWeek =  
                    6 === set_week( year, month, i )?'calendar_days_header_holiday'
                    : 0 === set_week( year, month, i )?'calendar_days_header_saturday'
                    :'calendar_days_header';
            }

            /* 수입,지출 세팅 */
            let day_income = '';    /* 수입 */
            let day_spending = '';  /* 지출 */
            for( let z = 0; z < holiday_date.length; z++){
                if( day_content_date[z].day === ((i+1) < 10 ? '0' + (i+1) : (i+1).toString()) ){
                    day_income = day_content_date[z].day_income;
                    day_spending = day_content_date[z].day_spending;
                }
            }
            calendar_day.push({ 
                calendar_days : (i+1) < 10 ? '0' + (i+1) : (i+1).toString()
                , calendar_weeks : calendar_setWeek
                , id : year+month+((i+1) < 10 ? '0' + (i+1) : (i+1).toString())
                , day_income :day_income
                , day_spending : day_spending
            });
        }
        return calendar_day;
    }

    /* 수입,지출 목록 */
    function dayContent(){
        const content_date = [{day:"01",day_income:"10000",day_spending:"20000"},{day:"07",day_income:"50000"},{day:"17",day_income:"500000",day_spending:"124800"},{day:"24",day_spending:"124800"}]

        return content_date;
    }

    /* 공휴일 목록 */
    function holiday(){
        const holiday_date = [{year:"2025",month:"10",day:"01"},{year:"2025",month:"10",day:"06"},{year:"2025",month:"10",day:"07"},{year:"2025",month:"10",day:"31"}]

        return holiday_date;
    }

    /* 선택한 달의 시작 요일, 마지막 요일, 마지막 일자 출력 */
    function date_set( yyyy, mm ){
        let firstDay = new Date(yyyy, mm-1,1).getDay(); // 시작 요일
        let lastDay = new Date(yyyy, mm,0).getDay();    // 마지막 요일
        let lastDate = new Date(yyyy, mm,0).getDate();  // 마지막 일자
        return [firstDay, lastDay, lastDate];
    }

    /* 선택된 월의 시작 요일 */
    function set_week( yyyy, mm, dd ){
        const firstDay = new Date(yyyy, mm-1, dd+1).getDay(); // 시작 요일
        return firstDay;
    }

    /* 이전 달의 일자 생성 */
    function previous_month_date(){
        let num = date_set(year,month)[0];
        let prev_date = [];
        for(var i = 0; i < num; i++){
            prev_date.push({ previous_day: new Date(year, month-1,0).getDate() - ( num - 1 - i) });
        }
        return prev_date;
    }

    /* 다음 달의 일자 생성 */
    function next_month_date(){
        let num = date_set(year,month)[1];
        const next_date = [];
        for(var i = 0; i < 6-num; i++){
            next_date.push({ next_day: new Date(year, month,1).getDate() + (i) });
        }
        return next_date;
    }

    
    /* 활성된 YYYY.MM 날짜 클릭이벤트 */
    function calendarDaysClick(date){
        // alert(userInfo.id);

        if(userInfo.id === null || userInfo.id === ''){
            alert('로그인을 해주세요');
            return;
        }

        setDayDetailHeader( `${date.id.slice(0,4)}.${date.id.slice(4,6)}.${date.id.slice(6,8)}` );
        dayDetail = dayImportExpenditure(dayDetailHeader.replace(/\./g, ""));
    }

    /* 선택일자의 수입, 지출 내역 */
    function dayImportExpenditure(dayDetailHeader){
        let dayImportExpenditure_dates = [];    /* 리턴 할 데이터를 담는 변수 */
        let dayImportExpenditure_dateLest = []; /* 기져온 데이터를 담을 변수 */

        /* 로그인이 되어있으면 데이터 가져오기 */
        if(  userInfo.id !== null && userInfo.id !== ''){
            dayImportExpenditure_dateLest = [{id:'user123',date:'20251023',title:'사용목적1',ImportExpenditure:-10000},{id:'user124',date:'20251024',title:'사용목적2',ImportExpenditure:+10000}];
        }

        /* 데이터 세팅 시 가져온 데이터에서 Id, 선택된 일자 체크 */
        for(let i = 0; i < dayImportExpenditure_dateLest.length; i++){
            if( userInfo.id === dayImportExpenditure_dateLest[i].id && dayImportExpenditure_dateLest[i].date === dayDetailHeader ){
                dayImportExpenditure_dates.push({ 
                    id : dayImportExpenditure_dateLest[i].id
                    , date : dayImportExpenditure_dateLest[i].date
                    , title : dayImportExpenditure_dateLest[i].title
                    , ImportExpenditure : dayImportExpenditure_dateLest[i].ImportExpenditure 
                });
            }
        }
        return dayImportExpenditure_dates;
    }

    return (
    <>
    <Menu userInfo={userInfo} setUserInfo={setUserInfo} />
        <div className='Content_All'>
        <Category />
            <div className='Content_Main'>
                
            <div className="App">
                    <div className='Household_Ledger_Main'>
                        <div className='Calendar_Home_Header'>
                            <div className='Calendar_Home_title'>Calendar</div>
                                {/* 달력에 년도 세팅 */}
                                <select className='sel_year' value = {year}  onChange={e => setYear(e.target.value)} >
                                    {CalendarYear_dates.map(date => (
                                        <option value= {date.CalendarYear}>{date.CalendarYear}</option>
                                    ))}
                                </select>
                                {/* 달력에 월 세팅 */}
                                <select className='sel_month' value = {month} onChange={e => setMonth(e.target.value)}>
                                    {CalendarMonth_dates.map(date => (
                                        <option value= {date.CalendarMonth}>{date.CalendarMonth}</option>
                                    ))}
                                </select>
                            </div>
                        <div id='Calendar_Home_Content' className='Calendar_Home_Content'>
                            {/* 달력에 요일 세팅 */}
                            {CalendarWeek_dates.map(date => (
                                <div class='week'> {date.calendar_week} </div>
                            ))}

                            {/* 달력 이전 달 일자 세팅 */}
                            {calendar_previous_day_dates.map(date => (
                                <div class='Hidden_Calendar_Application'>
                                    <div class='calendar_days'>
                                        <div class='calendar_days_header'> {date.previous_day} </div>
                                    </div>
                                </div>
                            ))}

                            {/* 달력 선택된 달 일자 세팅 */}
                            {calendar_day_dates.map(date => (
                                <div class='Calendar_Application'>
                                    <div id = {date.id} class='calendar_days' onClick={() => calendarDaysClick(date)}>
                                        <div class={date.calendar_weeks}> {date.calendar_days} </div>
                                        {/* [ date.day_income && ] - date.day_income 데이터가 없으면 해당 div안나옴 */}
                                        {date.day_income && <div class='day_income'> ＋{date.day_income} </div>}
                                        {date.day_spending && <div class='day_spending'> ＋{date.day_spending} </div>}
                                    </div>
                                </div>
                            ))}

                            {/* 달력 다음달 일자 세팅 */}
                            {calendar_next_day_dates.map(date => (
                                <div class='Hidden_Calendar_Application'>
                                    <div class='calendar_days'>
                                        <div class='calendar_days_header'> {date.next_day} </div>
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
                            
                            <div className='dayDetail_con_dt'>
                                <div className='dayDetail_con_dt_hd'>{date.title}</div>
                                <div>{date.ImportExpenditure}</div>
                            </div>
                            
                        ))}
                    </div>
                </div>      
            </div>
        </div>
    <Bottom />
    </> 
    )
}