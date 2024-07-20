package com.example.FoodRoad.biz.user.entity;

import java.util.Date;

import lombok.Data;

/**
 * @author ParkJunHyeok
 * @description
 *
 *              <pre>
 * 사용자 엔티티
 *              </pre>
 */
@Data
public class User {

	// Id
	private String userId;
	// 유저명
	private String userNm;
	// 유저비밀번호
	private String userPwd;
	// 등록날짜
	private Date regDtm;
	// 수정날짜
	private Date updDtm;
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
