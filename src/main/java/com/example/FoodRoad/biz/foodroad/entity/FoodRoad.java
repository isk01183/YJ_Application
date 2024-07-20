package com.example.FoodRoad.biz.foodroad.entity;

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
public class FoodRoad {
	// 게시판구분코드
	private String boardDvCd;
	// 게시판ID
	private String boardId;
	// 제목
	private String tite;
	// 내용
	private String ctt;
	// 유저명
	private String userNm;
	// 지역
	private String rgn;
	// 상세위치
	private String dtlsPost;
	// 영업시간
	private String bussDrtm;
	// 마감시간
	private String closDrtm;
	// 등록회원ID
	private String regMmbId;
	// 등록일시
	private Date regDtm;
	// 변경회원ID
	private String updMmbId;
	// 변경일시
	private Date updDtm;
	// 삭제여부
	private String delYn;

}
