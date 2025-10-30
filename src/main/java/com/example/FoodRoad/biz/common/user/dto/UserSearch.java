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
	// 유저PW
	private String userPwd;
}