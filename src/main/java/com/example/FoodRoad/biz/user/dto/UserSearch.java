package com.example.FoodRoad.biz.user.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;


/**
 * @author ParkJunHyeok
 * @description
 *
 * <pre>
 * 예제
 * </pre>
 */
@Data
@ToString(callSuper = true)
public class UserSearch {

	private String userId;
	private String userNm;
	private String emal;

}
