package com.example.FoodRoad.biz.inquiry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodRoad.biz.inquiry.exception.InquiryException;

@RestController
@RequestMapping("/api/inquiry")
public class InquiryController {

	@Autowired
	InquiryService inquiryService;

	@GetMapping("/inquiryWrite")
	public void fadWrite() throws InquiryException {

	}

}
