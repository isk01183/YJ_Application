package com.example.FoodRoad.common.base;

public class BaseException extends Exception {

	private static final long serialVersionUID = -931424986051705037L;
	
	/**
	   * 생성자
	   */
	  public BaseException() {
	    super();
	  }

	  /**
	   * 생성자
	   */
	  public BaseException(String message) {
	    super(message);
	  }

	  /**
	   * 생성자
	   */
	  public BaseException(Throwable cause) {
	    super(cause);
	  }
	
}
