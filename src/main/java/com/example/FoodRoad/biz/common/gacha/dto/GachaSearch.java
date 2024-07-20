package com.example.FoodRoad.biz.common.gacha.dto;

import com.example.FoodRoad.biz.user.dto.UserSearch;

import lombok.Data;
import lombok.ToString;

@Data
@ToString(callSuper = true)
public class GachaSearch {
	// 세그먼트ID
	private String SGMT_ID;
	// 가챠구분코드
	private String GACHA_DV_CD;
	// 가챠ID
	private String GACHA_ID;
}
