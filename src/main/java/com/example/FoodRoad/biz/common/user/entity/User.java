package com.example.FoodRoad.biz.common.user.entity;

import lombok.Data;

@Data
public class User {
	// 세그먼트ID
	private String sgmtId;
	// 유저ID
	private String userId;
	// 유저명
	private String userNm;
	// 우저PW
	private String userPwd;
	// 등록일시
	private String regDtm;
	// 변경일시
	private String updDtm;
	// 이메일
	private String emal;
	// 전화번호
	private String tel;
	// 성별
	private String gde;
	// 삭제여부
	private String delYn;
	// 유저등급
	private String userLvl;
	
}
