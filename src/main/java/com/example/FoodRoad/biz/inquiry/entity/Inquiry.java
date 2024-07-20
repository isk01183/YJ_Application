package com.example.FoodRoad.biz.inquiry.entity;

import java.util.Date;

import lombok.Data;

/**
 * 준혁
 */
@Data
public class Inquiry {

	// 게시판ID
	private String boardId;
	// 제목
	private String tite;
	// 내용
	private Date ctt;
	// 유저명
	private Date userNm;
	// 답변여부
	private String ansYn;
	// 답변내용
	private String ansCtt;
	// 등록회원ID
	private String regMmbId;
	// 등록일시
	private Date regDtm;
	// 변경회원ID
	private String updMmbId;
	// 변경일시
	private Date updDtm;
	// 게시판 비밀번호
	private String boardPwd;

}
