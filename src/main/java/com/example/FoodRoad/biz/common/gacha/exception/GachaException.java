package com.example.FoodRoad.biz.common.gacha.exception;

import com.example.FoodRoad.common.base.BaseException;

public class GachaException extends BaseException  {

	private static final long serialVersionUID = 5422746339265087588L;

	/**
	 * 생성자
	 */
	public GachaException() {
		super();
	}

	/**
	 * @param message
	 *
	 *                생성자
	 */
	public GachaException(String message) {
		super(message);
	}
}
