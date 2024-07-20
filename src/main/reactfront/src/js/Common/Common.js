export const mainFn = () => {
    console.log("메인에서 호출합니다..")
}

// 뽑기 확률
const gacha_prob = { SSR : 22, SR : 100, R : 878 }

// // 뽑기 아이템
// const gacha_id = {
//     pick : [ "zzz","yyy" ]
//     , SSR : ["a", "b","c","d","e","f","g","h","i","j","k","l","n","m","o","p","q","r","s","t","u"]
//     , SR : ["v","w","x","y","z","aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","aq","ar","as","at","au"]
//     , R : ["av","aw","ax","ay","ax","ba","bb","bc","bd","be","bf","bg","bh","bi","bh","bk","bl","bm","bn","bo","bp","bq","br","bs","bt","bu"]
// }

let gacha_Sort = {pick:[],SSR:[],SR:[],R:[]};
export const gachaSort = ( date ) => {
    gacha_Sort = {pick:[],SSR:[],SR:[],R:[]};

    for( let i = 0; i < date.length; i++ ){
        let dataRow = {
            pickYn : date[i].pickupYn
            , id : date[i].gachaId
            , lv : date[i].gachaLvl
            , name : date[i].gachaName
            , elmtCd : date[i].gachaElmtCd
        }
        
        if( dataRow.pickYn === "Y" ){
            gacha_Sort.pick[gacha_Sort.pick.length] = dataRow;
        }

        if( dataRow.lv === "5" && dataRow.pickYn === "N" ){
            gacha_Sort.SSR[gacha_Sort.SSR.length] = dataRow;
        }

        if( dataRow.lv === "4" && dataRow.pickYn === "N" ){
            gacha_Sort.SR[gacha_Sort.SR.length] = dataRow;
        }

        if( dataRow.lv === "3" && dataRow.pickYn === "N" ){
            gacha_Sort.R[gacha_Sort.R.length] = dataRow;
        }
      };
    //   console.log(gacha_Sort);
    return gacha_Sort;
}

export const gacha = ( count, pickup_yn ) => {
    let gachaVal = [];
    for(let i = 0; count > i; i++ ){
        // 1회당 뽑기 뽑을 값 구하기 1 ~ 1000
        let gacha_cho = Math.floor(Math.random()*1000+1)
        // 뽑기 값이 gacha_prob.SSR(22) 이하면 SSR
        if( gacha_cho <= gacha_prob.SSR ){
            // pickup_yn 값이 Y 이고 1이면 픽업 뽑기 아니면 통상 뽑기 s
            gacha_cho = Math.floor(Math.random()*2+1)
            if( pickup_yn === "Y" && gacha_cho === 1 ){
                gacha_cho = Math.floor(Math.random()*gacha_Sort.pick.length+0)
                gachaVal[gachaVal.length] = gacha_Sort.pick[gacha_cho];
            }else{
                gacha_cho = Math.floor(Math.random()*gacha_Sort.SSR.length+0)
                gachaVal[gachaVal.length] = gacha_Sort.SSR[gacha_cho]
            }
        // 뽑기 값이 gacha_prob.SSR(22) 초과 gacha_prob.SR(100) 이하면 SR    
        }else if( gacha_cho <= gacha_prob.SR ){
            gacha_cho = Math.floor(Math.random()*gacha_Sort.SR.length+0)
            gachaVal[gachaVal.length] = gacha_Sort.SR[gacha_cho]
        }else {
            gacha_cho = Math.floor(Math.random()*gacha_Sort.R.length+0)
            gachaVal[gachaVal.length] = gacha_Sort.R[gacha_cho]
        }
        gacha_cho = 0
    }
    return gachaVal
}

