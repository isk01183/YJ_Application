package com.example.FoodRoad.biz.inquiry.exception;

import com.example.FoodRoad.common.base.BaseException;

public class InquiryException extends BaseException {

	private static final long serialVersionUID = 5422746339265087588L;

	/**
	 * 생성자
	 */
	public InquiryException() {
		super();
	}

	/**
	 * @param message
	 *
	 *                생성자
	 */
	public InquiryException(String message) {
		super(message);
	}

}
