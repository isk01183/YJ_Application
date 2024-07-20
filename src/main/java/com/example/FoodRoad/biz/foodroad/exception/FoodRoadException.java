package com.example.FoodRoad.biz.foodroad.exception;

import com.example.FoodRoad.common.base.BaseException;

/**
 * 준혁
 */
public class FoodRoadException extends BaseException {

	private static final long serialVersionUID = 5422746339265087588L;

	/**
	 * 생성자
	 */
	public FoodRoadException() {
		super();
	}

	/**
	 * @param message
	 *
	 *                생성자
	 */
	public FoodRoadException(String message) {
		super(message);
	}
}
