package com.example.FoodRoad.biz.common.sample.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString(callSuper = true)
public class SampleSearch {
	
	// 세그먼트ID
	private String SGMT_ID;
	// 가챠구분코드
	private String GACHA_DV_CD;
	// 가챠ID
	private String GACHA_ID;
}
