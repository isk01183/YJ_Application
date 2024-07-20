package com.example.FoodRoad.biz.common.gacha.entity;

import java.util.Date;
import lombok.Data;

@Data
public class Gacha {
	
	// 세그먼트ID
	private String sgmtId;
	// 가챠구분코드
	private String gachaDvCd;
	// 가챠ID
	private String gachaId;
	// 가챠속성코드
	private String gachaElmtCd;
	// 가챠등급
	private String gachaLvl;
	// 가챠이름
	private String gachaName;
	// 픽업설정여부
	private String pickupYn;

}
