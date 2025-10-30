package com.example.FoodRoad.biz.common.sample.exception;

import com.example.FoodRoad.common.base.BaseException;

public class SampleException extends BaseException  {

	private static final long serialVersionUID = 5422746339265087588L;

	/**
	 * 생성자
	 */
	public SampleException() {
		super();
	}

	/**
	 * @param message
	 *
	 *                생성자
	 */
	public SampleException(String message) {
		super(message);
	}
}
