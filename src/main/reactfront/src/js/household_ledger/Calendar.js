
    /* 달력 년도 옵션 세팅 */
    export function year_set( currentYear ){
        let sel_setYear = [];
        for(let i = currentYear-5; i <= currentYear+2; i++){
            sel_setYear.push({ CalendarYear: i.toString() });
        }
        return sel_setYear;
    }

    /* 달력 월 옵션 세팅 */
    export function month_set(){
        let sel_setMonth = [];
        for(let i = 1; i <= 12; i++){
            let month_i =  (i) < 10 ? '0' + (i) : (i).toString() ;
            sel_setMonth.push({ CalendarMonth: month_i });
        }
        return sel_setMonth;
    }
    
    /* 달력 요일 세팅 */
    export function week_set(){
        let calendar_week = [];
        const day = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
        for(var i = 0; i <= 6; i++){
            calendar_week.push({ calendar_week: day[i] });
        }
        return calendar_week
    }

    /* 달력 일자 세팅 */
    export function calendar_day_set(year,month){
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
                    0 === set_week( year, month, i )?'calendar_days_header_holiday'
                    : 6 === set_week( year, month, i )?'calendar_days_header_saturday'
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
    export function previous_month_date( year,month ){
        let num = date_set(year,month)[0];
        let prev_date = [];
        for(var i = 0; i < num; i++){
            prev_date.push({ previous_day: new Date(year, month-1,0).getDate() - ( num - 1 - i) });
        }
        return prev_date;
    }

    /* 다음 달의 일자 생성 */
    export function next_month_date( year,month ){
        let num = date_set(year,month)[1];
        const next_date = [];
        for(var i = 0; i < 6-num; i++){
            next_date.push({ next_day: new Date(year, month,1).getDate() + (i) });
        }
        return next_date;
    }

    /* 선택일자의 수입, 지출 내역 */
    export function dayImportExpenditure( dayDetailHeader ){
        let dayImportExpenditure_dates = [];    /* 리턴 할 데이터를 담는 변수 */
        // let dayImportExpenditure_dateLest = []; /* 기져온 데이터를 담을 변수 */

        /* 로그인이 되어있으면 데이터 가져오기 */
        // if(  userInfo.id !== null && userInfo.id !== ''){
        //     dayImportExpenditure_dateLest = [{id:'user123',date:'20251023',title:'사용목적1',ImportExpenditure:-10000},{id:'user124',date:'20251024',title:'사용목적2',ImportExpenditure:+10000}];
        // }

        /* 데이터 세팅 시 가져온 데이터에서 Id, 선택된 일자 체크 */
        // for(let i = 0; i < dayImportExpenditure_dateLest.length; i++){
        //     if( userInfo.id === dayImportExpenditure_dateLest[i].id && dayImportExpenditure_dateLest[i].date === dayDetailHeader ){
        //         dayImportExpenditure_dates.push({ 
        //             id : dayImportExpenditure_dateLest[i].id
        //             , date : dayImportExpenditure_dateLest[i].date
        //             , title : dayImportExpenditure_dateLest[i].title
        //             , ImportExpenditure : dayImportExpenditure_dateLest[i].ImportExpenditure 
        //         });
        //     }
        // }
        return dayImportExpenditure_dates;
    }