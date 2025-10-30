package com.example.FoodRoad.biz.common.sample;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodRoad.biz.common.sample.dto.SampleSearch;
import com.example.FoodRoad.biz.common.sample.entity.Sample;
import com.example.FoodRoad.biz.common.sample.exception.SampleException;

@RestController
@RequestMapping("/api/common/sample")
public class SampleController {

	@Autowired
	SampleService sampleService;

	@GetMapping("/sampleList")
	public List<Sample> selectSampleList(SampleSearch sampleSearch) throws SampleException {
		System.out.println("SampleController");
		return sampleService.selectSampleList(sampleSearch);
	}

}
