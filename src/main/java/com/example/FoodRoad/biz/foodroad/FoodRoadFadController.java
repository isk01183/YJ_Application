package com.example.FoodRoad.biz.foodroad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodRoad.biz.foodroad.exception.FoodRoadException;

/**
 * 준혁
 */
@RestController
@RequestMapping("/api/foodroad/fad")
public class FoodRoadFadController {

	@Autowired
	FoodRoadFadService foodRoadFadService;

	@GetMapping("/fadList")
	public void fadList() throws FoodRoadException {

	}

}
