package com.example.FoodRoad.biz.common.user.dto;

import lombok.Data;
import lombok.NoArgsConstructor; // 1. import 추가

@Data // @ToString이 이미 포함되어 있으므로 @ToString은 삭제해도 됩니다.
@NoArgsConstructor // 2. JSON 매핑을 위한 기본 생성자 추가
public class UserSearch {
	
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