package com.example.FoodRoad.biz.user.exception;

import com.example.FoodRoad.common.base.BaseException;

/**
 * @author ParkJunHyeok
 * @description
 * 
 * <pre>
 * 
 * </pre>
 */
public class UserException extends BaseException {
	
	private static final long serialVersionUID = 5422746339265087588L;

	/**
	 * 생성자
	 */
	public UserException() {
		super();
	}

	/**
	 * @param message
	 *
	 *                생성자
	 */
	public UserException(String message) {
		super(message);
	}

}
